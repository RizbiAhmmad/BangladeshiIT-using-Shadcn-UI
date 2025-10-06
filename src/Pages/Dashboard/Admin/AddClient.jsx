import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const AddClient = () => {
  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "Male",
    company: "",
    category: "",
    address: "",
    description: "",
  });

  const handleChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://72.60.199.112:5000/clients", clientData);
    if (res.data.insertedId) {
      Swal.fire("Success", "Client added successfully!", "success");
      setClientData({
        name: "",
        email: "",
        mobile: "",
        gender: "Male",
        company: "",
        category: "",
        address: "",
        description: "",
      });
    } else {
      Swal.fire("Oops!", "Client not added.", "error");
    }
  } catch (error) {
    console.error("Add client error:", error);
    Swal.fire("Error", "Something went wrong!", "error");
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl p-6 mx-auto bg-white rounded-md shadow-md"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Client Name */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-600">
            CLIENT NAME <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="CLIENT NAME"
            value={clientData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-sm border rounded-full"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-600">
            CLIENT MOBILE NO<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="mobile"
            placeholder="CLIENT MOBILE NO"
            value={clientData.mobile}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-sm border rounded-full"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-600">
            CLIENT EMAIL
          </label>
          <input
            type="email"
            name="email"
            placeholder="CLIENT EMAIL"
            value={clientData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 text-sm border rounded-full"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-600">
            GENDER
          </label>
          <select
            name="gender"
            value={clientData.gender}
            onChange={handleChange}
            className="w-full px-4 py-2 text-sm border rounded-full"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Company */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-600">
            CLIENT COMPANY
          </label>
          <input
            type="text"
            name="company"
            placeholder="CLIENT COMPANY"
            value={clientData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 text-sm border rounded-full"
          />
        </div>

        {/* Category */}
       <div>
          <label className="block mb-1 text-sm font-semibold text-gray-600">
            CLIENT CATEGORY
          </label>
          <input
            type="text"
            name="category"
            placeholder="CLIENT CATEGORY"
            value={clientData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 text-sm border rounded-full"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-600">
            ADDRESS
          </label>
          <input
            type="text"
            name="address"
            placeholder="Client Address"
            value={clientData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 text-sm border rounded-full"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-600">
            DESCRIPTION
          </label>
          <textarea
            name="description"
            placeholder="Client Description"
            value={clientData.description}
            onChange={handleChange}
            rows={2}
            className="w-full px-4 py-2 text-sm border rounded-md"
          />
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          type="submit"
          className="px-6 py-2 text-white transition bg-green-500 rounded-full hover:bg-orange-600"
        >
          Submit Client
        </button>
      </div>
    </form>
  );
};

export default AddClient;
