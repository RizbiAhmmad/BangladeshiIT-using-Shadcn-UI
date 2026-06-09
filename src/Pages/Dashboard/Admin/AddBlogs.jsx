import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { API_BASE_URL } from "../../../config/apiConfig";

export default function AddBlogs() {
  const { user } = useAuth(); // user info
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle text field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  // handle image select
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      return Swal.fire("Error", "Please select an image", "error");
    }

    setLoading(true);

    try {
      const cloudinaryData = new FormData();
      cloudinaryData.append("file", imageFile);
      cloudinaryData.append("upload_preset", "eCommerce"); // same preset as before

      const cloudinaryRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dt3bgis04/image/upload",
        cloudinaryData
      );

      const imageUrl = cloudinaryRes.data.secure_url;

      const blogWithEmail = {
        ...blog,
        image: imageUrl,
        email: user?.email,
        createdAt: new Date(),
      };

      const res = await axios.post(`${API_BASE_URL}/blogs`, blogWithEmail);

      if (res.data.insertedId) {
        Swal.fire("Success", "Blog added successfully", "success");
        setBlog({ title: "", description: "", tag: "", link: "" });
        setImageFile(null);
      } else {
        Swal.fire("Error", "Failed to add blog", "error");
      }
    } catch (error) {
      console.error("❌ Error adding blog:", error);
      Swal.fire("Error", "Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl p-6 mx-auto mt-10 bg-white border border-green-500 rounded-lg shadow">
      <h2 className="mb-4 text-2xl font-bold text-center text-green-700">
        Add a New Blog
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          name="title"
          value={blog.title}
          onChange={handleChange}
          placeholder="Blog Title"
          className="w-full p-2 border rounded"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          value={blog.description}
          onChange={handleChange}
          placeholder="Blog Description"
          rows={4}
          className="w-full p-2 border rounded"
          required
        />

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-semibold">Blog Image</label>
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
            onChange={handleImageChange}
            accept="image/*"
            required
            className="hidden"
          />
        </div>

        {/* Tag */}
        <input
          name="tag"
          value={blog.tag}
          onChange={handleChange}
          placeholder="Tag (e.g. SEO, Branding)"
          className="w-full p-2 border rounded"
        />

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600"
          >
            {loading ? "Uploading..." : "Add Blog"}
          </button>
        </div>
      </form>
    </div>
  );
}
