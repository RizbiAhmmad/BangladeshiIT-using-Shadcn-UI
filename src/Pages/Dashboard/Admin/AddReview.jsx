import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    image: user?.photoURL || "",
    logo: "",
    role: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      ...formData,
      email: user?.email,
    };

    try {
      const res = await axios.post("https://bangladeshi-it-server.vercel.app/reviews", reviewData);
      if (res.data.insertedId) {
        Swal.fire("Success", "Review submitted successfully!", "success");
        setFormData({ name: "", image: "", logo: "", role: "", feedback: "" });
      }
    } catch (error) {
      Swal.fire("Error", "Failed to submit review", "error");
    }
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white border border-green-500 shadow-md mt-10 rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="role"
          required
          value={formData.role}
          onChange={handleChange}
          placeholder="Your Position (e.g. CEO of Brand)"
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="image"
          required
          value={formData.image}
          onChange={handleChange}
          placeholder="Client Image URL"
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="logo"
          required
          value={formData.logo}
          onChange={handleChange}
          placeholder="Company Logo URL"
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          name="feedback"
          required
          value={formData.feedback}
          onChange={handleChange}
          placeholder="Your Feedback"
          className="w-full border px-4 py-2 rounded"
        />
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            Submit Review
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddReview;
