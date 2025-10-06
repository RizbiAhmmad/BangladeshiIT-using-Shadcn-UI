import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const AllEnrollments = () => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    axios
      .get("http://72.60.199.112:5000/enrollments")
      .then((res) => setEnrollments(res.data))
      .catch((err) => console.error("Failed to fetch enrollments", err));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This enrollment will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://72.60.199.112:5000/enrollments/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            setEnrollments(enrollments.filter((item) => item._id !== id));
            Swal.fire("Deleted!", "Enrollment has been removed.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h2 className="mb-6 text-3xl font-bold text-center">All Enrollments</h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm text-left table-auto">
          <thead className="text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Course</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">WhatsApp</th>
              <th className="px-4 py-3">Designation</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {enrollments.map((enroll, index) => (
              <tr key={enroll._id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <p className="font-semibold text-green-700">{enroll.courseName}</p>
                </td>
                <td className="px-4 py-2">
                  <p className="text-sm text-gray-800">Name: {enroll.fullName}</p>
                  <p className="text-sm text-gray-800">Email: {enroll.email}</p>
                </td>
                <td className="px-4 py-2">{enroll.whatsapp}</td>
                <td className="px-4 py-2">{enroll.designation || "—"}</td>
                <td className="px-4 py-2">{enroll.address || "—"}</td>
                <td className="px-4 py-2">
                  {new Date(enroll.enrolledAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(enroll._id)}
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}

            {enrollments.length === 0 && (
              <tr>
                <td colSpan="8" className="py-4 text-center text-gray-500">
                  No enrollments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEnrollments;
