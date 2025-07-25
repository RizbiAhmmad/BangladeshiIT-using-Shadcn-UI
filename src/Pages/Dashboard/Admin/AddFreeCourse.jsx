import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";

const AddFreeCourse = () => {
  const { user } = useAuth();
  const [course, setCourse] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const courseData = {
      ...course,
      email: user?.email,
      createdAt: new Date(),
    };

    try {
      const res = await axios.post("http://localhost:5000/free-courses", courseData);
      if (res.data.insertedId) {
        Swal.fire("Success", "Course added successfully", "success");
        setCourse({ name: "", description: "", price: "" });
      }
    } catch (err) {
      Swal.fire("Error", "Failed to add course", "error");
    }
  };

  return (
    <div className="max-w-xl p-6 mx-auto mt-10 bg-white border border-green-500 rounded-lg shadow">
      <h2 className="mb-4 text-2xl font-bold text-center text-green-700">Add Free Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={course.name}
          onChange={handleChange}
          placeholder="Course Name"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          value={course.description}
          onChange={handleChange}
          placeholder="Course Description"
          rows={4}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="price"
          value={course.price}
          type="number"
          onChange={handleChange}
          placeholder="Course Price"
          className="w-full p-2 border rounded"
        />
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 text-white bg-green-500 rounded hover:bg-orange-600"
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFreeCourse;