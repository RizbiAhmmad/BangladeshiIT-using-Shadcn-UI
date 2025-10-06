import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export default function ContactWithForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone) {
      return Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Name and phone are required.",
      });
    }

    const phoneRegex = /^01\d{9}$/; 
    if (!phoneRegex.test(phone)) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Phone Number",
        text: "Please enter a valid 11-digit Bangladeshi phone number starting with 01.",
      });
    }

    setLoading(true);

    try {
      // POST request to backend
      await axios.post("https://bangladeshiit-server-api.onrender.com/contactRequests", {
        name,
        company,
        phone,
        message,
        createdAt: new Date()
      });

      setLoading(false);

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Form submitted successfully ✅",
        timer: 2000,
        showConfirmButton: false,
      });

      navigate("/thank-you");

    } catch (err) {
      console.error("Form submission error:", err);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-center text-black dark:text-white">
          Submit to Request a Demo
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full p-3 border rounded"
            />
          </div>

          <div>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company or Business Name"
              className="w-full p-3 border rounded"
            />
          </div>

          <div>
            <input
              value={phone}
              type="number"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number (e.g., 017xxxxxxxx)"
              className="w-full p-3 border rounded"
            />
          </div>

          <div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your requirements (optional)"
              className="w-full p-3 border rounded"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 text-white bg-gradient-to-t from-[#006752] to-[#15C300] rounded-lg"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
  );
}
