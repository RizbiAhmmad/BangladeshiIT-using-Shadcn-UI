import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";


export default function AddBlogs() {
  const { user } = useAuth(); //  user info
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
    tag: "",
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogWithEmail = {
      ...blog,
      email: user?.email,
      createdAt: new Date(),
    };

    try {
      const res = await axios.post("https://api.bangladeshiit.com/blogs", blogWithEmail);
      if (res.data.insertedId) {
        Swal.fire("Success", "Blog added successfully", "success");
        setBlog({ title: "", description: "", image: "", tag: "", link: "" });
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      Swal.fire("Error", "Failed to add blog", "error");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white border border-green-500 shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
        Add a New Blog
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={blog.title}
          onChange={handleChange}
          placeholder="Blog Title"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          value={blog.description}
          onChange={handleChange}
          placeholder="Blog Description"
          rows={4}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="image"
          value={blog.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="tag"
          value={blog.tag}
          onChange={handleChange}
          placeholder="Tag (e.g. SEO, Branding)"
          className="w-full border p-2 rounded"
        />
        <input
          name="link"
          value={blog.link}
          onChange={handleChange}
          placeholder="External link (optional)"
          className="w-full border p-2 rounded"
        />

         <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
}
