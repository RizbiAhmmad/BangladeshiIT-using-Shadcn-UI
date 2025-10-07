import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const AddMember = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    facebook: "",
    linkedin: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!imageFile) {
    return Swal.fire("Error", "Please select an image", "error");
  }

  setLoading(true);

  try {
    // 1. Upload image to Cloudinary
    const cloudinaryData = new FormData();
    cloudinaryData.append("file", imageFile);
    cloudinaryData.append("upload_preset", "Team_member");

    const cloudinaryRes = await axios.post(
      "https://api.cloudinary.com/v1_1/ddqfq6irk/image/upload",
      cloudinaryData
    );

    const imageUrl = cloudinaryRes.data.secure_url;
    console.log("🔗 Cloudinary Image URL:", imageUrl);

    // 2. Submit data to backend
    const memberData = {
      ...formData,
      email: user?.email,
      image: imageUrl,
    };
    console.log("📤 Payload sent to backend:", JSON.stringify(memberData, null, 2));

    const res = await axios.post(
      "https://api.bangladeshiit.com/team",
      JSON.stringify(memberData), // Explicitly stringify the payload
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.data.insertedId) {
      Swal.fire("Success", "Team member added successfully!", "success");
      setFormData({
        name: "",
        position: "",
        facebook: "",
        linkedin: "",
      });
      setImageFile(null);
    } else {
      Swal.fire("Error", "Server error. Member not added.", "error");
    }
  } catch (err) {
    console.error("❌ Add Member Error:", err.response?.data || err.message);
    Swal.fire("Error", "Something went wrong", "error");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="max-w-2xl p-6 mx-auto mt-10 bg-white border border-green-500 shadow-md rounded-xl">
      <h2 className="mb-4 text-2xl font-bold text-center">Add Team Member</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="position"
          required
          value={formData.position}
          onChange={handleChange}
          placeholder="Position"
          className="w-full px-4 py-2 border rounded"
        />

        <div>
          <label className="block mb-1 font-medium text-gray-700">Profile Image</label>
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

        <input
          type="text"
          name="facebook"
          value={formData.facebook}
          onChange={handleChange}
          placeholder="Facebook URL"
          className="w-full px-4 py-2 border rounded"
        />
  
        <input
          type="text"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="LinkedIn URL"
          className="w-full px-4 py-2 border rounded"
        />

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 text-white bg-green-500 rounded hover:bg-orange-600 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Member"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddMember;
