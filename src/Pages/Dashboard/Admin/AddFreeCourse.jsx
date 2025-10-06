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
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      return Swal.fire("Error", "Please select an image", "error");
    }

    setLoading(true);

    try {
      // 1. Upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "Team_member"); // ✅ Your Cloudinary preset

      const cloudinaryRes = await axios.post(
        "https://api.cloudinary.com/v1_1/ddqfq6irk/image/upload",
        formData
      );

      const imageUrl = cloudinaryRes.data.secure_url;

      // 2. Prepare and send course data to backend
      const courseData = {
        ...course,
        email: user?.email,
        image: imageUrl,
        createdAt: new Date(),
      };

      const res = await axios.post("http://72.60.199.112:5000/free-courses", courseData);
      if (res.data.insertedId) {
        Swal.fire("Success", "Course added successfully", "success");
        setCourse({ name: "", description: "", price: "" });
        setImageFile(null);
      }
    } catch (err) {
      console.error("Error adding course:", err);
      Swal.fire("Error", "Failed to add course", "error");
    } finally {
      setLoading(false);
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
        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Course Image</label>
          <div className="flex items-center gap-4">
            <label
              htmlFor="image"
              className="px-4 py-2 text-white transition bg-green-500 rounded-lg shadow cursor-pointer hover:bg-green-600"
            >
              Choose File
            </label>
            <span className="text-sm text-gray-600">
              {imageFile ? imageFile.name : "No file chosen"}
            </span>
          </div>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="hidden"
          />
        </div>

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
            className="px-6 py-2 text-white bg-green-500 rounded hover:bg-orange-600 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Add Course"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFreeCourse;