import { useQuery } from "@tanstack/react-query";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AllFreeCourses = () => {
  const navigate = useNavigate();

  const { data: courses = [], refetch } = useQuery({
    queryKey: ["free-courses"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/free-courses");
      return res.data;
    },
  });

  const handleDeleteCourse = (course) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This course will be removed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/free-courses/${course._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Course has been removed.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="max-w-6xl p-6 mx-auto">
      <h2 className="mb-6 text-3xl font-bold text-center">All Courses</h2>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate("/dashboard/addFreeCourse")}
          className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded hover:bg-orange-600"
        >
          <FaPlus /> Add Course
        </button>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left table-auto text-md">
          <thead className="text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {courses.map((course, index) => (
              <tr key={course._id}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{course.name}</td>
                <td className="px-4 py-2">{course.description}</td>
                <td className="px-4 py-2">৳ {course.price}</td>
                <td className="px-4 py-2">{course.email}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDeleteCourse(course)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllFreeCourses;
