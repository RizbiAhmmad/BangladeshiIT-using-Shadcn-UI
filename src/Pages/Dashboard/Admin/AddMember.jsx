import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const AddMember = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    image: "",
    facebook: "",
    github: "",
    linkedin: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const memberData = {
      ...formData,
      email: user?.email
    };

    try {
      const res = await axios.post("http://localhost:5000/team", memberData);
      if (res.data.insertedId) {
        Swal.fire("Success", "Team member added successfully!", "success");
        setFormData({
          name: "",
          position: "",
          image: "",
          facebook: "",
          github: "",
          linkedin: ""
        });
      }
    } catch (error) {
      Swal.fire("Error", "Failed to add member", "error");
    }
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white border border-green-500 shadow-md mt-10 rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Team Member</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full border px-4 py-2 rounded" />
        <input type="text" name="position" required value={formData.position} onChange={handleChange} placeholder="Position (e.g. Software Engineer)" className="w-full border px-4 py-2 rounded" />
        <input type="text" name="image" required value={formData.image} onChange={handleChange} placeholder="Profile Image URL" className="w-full border px-4 py-2 rounded" />
        <input type="text" name="facebook" value={formData.facebook} onChange={handleChange} placeholder="Facebook URL" className="w-full border px-4 py-2 rounded" />
        <input type="text" name="github" value={formData.github} onChange={handleChange} placeholder="GitHub URL" className="w-full border px-4 py-2 rounded" />
        <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="LinkedIn URL" className="w-full border px-4 py-2 rounded" />
        <div className="text-center">
          <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-orange-600">
            Submit Member
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddMember;
