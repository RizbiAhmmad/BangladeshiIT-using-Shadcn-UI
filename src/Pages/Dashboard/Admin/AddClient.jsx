import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddClient = () => {
  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    gender: "Male",
    category: "",
    address: "",
    description: "",
  });

  const handleChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Client Info:", clientData);
    // TODO: Send to backend
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
            CLIENT MOBILE <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="mobile"
            placeholder="CLIENT MOBILE"
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
            rows={3}
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
