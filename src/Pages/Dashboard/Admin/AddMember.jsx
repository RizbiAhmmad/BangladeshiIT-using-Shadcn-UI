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
    github: "",
    linkedin: "",
  });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("position", formData.position);
    form.append("facebook", formData.facebook);
    form.append("github", formData.github);
    form.append("linkedin", formData.linkedin);
    form.append("email", user?.email);
    form.append("image", imageFile);

    try {
      const res = await axios.post("https://bangladeshi-it-server.vercel.app/team", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.insertedId) {
        Swal.fire("Success", "Team member added successfully!", "success");
        setFormData({
          name: "",
          position: "",
          facebook: "",
          github: "",
          linkedin: "",
        });
        setImageFile(null);
      }
    } catch (error) {
      Swal.fire("Error", "Failed to add member", "error");
    }
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white border border-green-500 shadow-md mt-10 rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Team Member</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        encType="multipart/form-data"
      >
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="position"
          required
          value={formData.position}
          onChange={handleChange}
          placeholder="Position"
          className="w-full border px-4 py-2 rounded"
        />

        <div>
          <label className="block mb-1 font-medium">Profile Image</label>

          <div className="flex items-center gap-4">
            <label
              htmlFor="image"
              className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Choose File
            </label>
            <span className="text-sm text-gray-600">
              {imageFile ? imageFile.name : "No file chosen"}
            </span>
          </div>

          <input
            type="file"
            name="image"
            id="image"
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
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="github"
          value={formData.github}
          onChange={handleChange}
          placeholder="GitHub URL"
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="LinkedIn URL"
          className="w-full border px-4 py-2 rounded"
        />

        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            Submit Member
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddMember;
