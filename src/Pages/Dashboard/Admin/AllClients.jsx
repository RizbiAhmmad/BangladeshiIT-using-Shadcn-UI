import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AllClients = () => {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.bangladeshiit.com/clients")
      .then((res) => setClients(res.data))
      .catch((err) => console.error("Failed to fetch clients", err));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://api.bangladeshiit.com/clients/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            setClients(clients.filter((client) => client._id !== id));
            Swal.fire("Deleted!", "Client has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h2 className="mb-6 text-3xl font-bold text-center">All Clients</h2>

      {/* Add Client button on right */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate("/dashboard/addClient")}
          className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded hover:bg-orange-600"
        >
          <FaPlus /> Add Client
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm text-left table-auto">
          <thead className="text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Gender</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {clients.map((client, index) => (
              <tr key={client._id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{client.name}</td>

                {/* Contact column */}
                <td className="px-4 py-2">
                  <p className="text-sm text-gray-800">Email: {client.email}</p>
                  <p className="text-sm text-gray-800">Mobile: {client.mobile}</p>
                </td>

                <td className="px-4 py-2">{client.gender}</td>
                <td className="px-4 py-2">{client.company}</td>
                <td className="px-4 py-2">{client.category}</td>
                <td className="px-4 py-2">{client.address}</td>
                <td className="px-4 py-2">{client.description}</td>

                {/* Delete Action */}
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(client._id)}
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}

            {/* No clients fallback */}
            {clients.length === 0 && (
              <tr>
                <td colSpan="9" className="py-4 text-center text-gray-500">
                  No clients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClients;
