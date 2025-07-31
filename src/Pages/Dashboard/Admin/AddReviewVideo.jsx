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
      const res = await axios.post("https://bangladeshiit-server-api.onrender.com/review-videos", videoData);
      if (res.data.insertedId) {
        Swal.fire("Success", "Video review added successfully!", "success");
        setFormData({ title: "", videoUrl: "" });
      }
    } catch (error) {
      Swal.fire("Error", "Failed to add video", "error");
    }
  };

  return (
    <section className="max-w-2xl p-6 mx-auto mt-10 bg-white border border-green-500 shadow-md rounded-xl">
      <h2 className="mb-4 text-2xl font-bold text-center">Add Client Review Video</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          required
          value={formData.title}
          onChange={handleChange}
          placeholder="Video Title"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="videoUrl"
          required
          value={formData.videoUrl}
          onChange={handleChange}
          placeholder="YouTube Video URL"
          className="w-full px-4 py-2 border rounded"
        />
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 text-white bg-green-500 rounded hover:bg-orange-600"
          >
            Submit Video
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddReviewVideo;
