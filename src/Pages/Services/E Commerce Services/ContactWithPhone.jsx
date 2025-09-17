import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function ContactWithForm() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !category) {
      return Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Name, phone, and category are required.",
      });
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "contactRequests"), {
        category,
        name,
        company,
        phone,
        message,
        verified: false,
        createdAt: serverTimestamp(),
      });
      setLoading(false);

      await Swal.fire({
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
        text: err.message,
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl mb-6 font-bold text-center text-black dark:text-white">Submit to Request a Demo</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border rounded"
          >
            <option value="">Select Business Category</option>
            <option value="it">IT</option>
            <option value="marketing">Marketing</option>
            <option value="design">Design</option>
          </select>
        </div> */}

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

        {/* Centered Submit Button */}
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
