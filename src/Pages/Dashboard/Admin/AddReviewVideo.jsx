import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const AddReviewVideo = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    videoUrl: "",
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const videoData = {
      ...formData,
      email: user?.email,
    };

    try {
      const res = await axios.post("http://localhost:5000/review-videos", videoData);
      if (res.data.insertedId) {
        Swal.fire("Success", "Video review added successfully!", "success");
        setFormData({ title: "", videoUrl: "" });
      }
    } catch (error) {
      Swal.fire("Error", "Failed to add video", "error");
    }
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white border border-green-500 shadow-md mt-10 rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Client Review Video</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          required
          value={formData.title}
          onChange={handleChange}
          placeholder="Video Title"
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="videoUrl"
          required
          value={formData.videoUrl}
          onChange={handleChange}
          placeholder="YouTube Video Embed URL"
          className="w-full border px-4 py-2 rounded"
        />
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            Submit Video
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddReviewVideo;
