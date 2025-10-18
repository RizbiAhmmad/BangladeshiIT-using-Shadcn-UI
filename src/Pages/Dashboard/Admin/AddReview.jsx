import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name:"",
    role: "",
    feedback: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle text input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Handle logo file selection
  const handleLogoChange = (e) => {
    setLogoFile(e.target.files[0]);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile || !logoFile) {
      return Swal.fire("Error", "Please upload both image and logo", "error");
    }

    setLoading(true);

    try {
      // Upload client image to Cloudinary
      const imageData = new FormData();
      imageData.append("file", imageFile);
      imageData.append("upload_preset", "eCommerce");

      const imageRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dt3bgis04/image/upload",
        imageData
      );
      const imageUrl = imageRes.data.secure_url;

      // Upload company logo to Cloudinary
      const logoData = new FormData();
      logoData.append("file", logoFile);
      logoData.append("upload_preset", "eCommerce");

      const logoRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dt3bgis04/image/upload",
        logoData
      );
      const logoUrl = logoRes.data.secure_url;

      // Combine all data
      const reviewData = {
        ...formData,
        image: imageUrl,
        logo: logoUrl,
        email: user?.email,
        createdAt: new Date(),
      };

      // Send to backend
      const res = await axios.post(
        "https://api.bangladeshiit.com/reviews",
        reviewData
      );

      if (res.data.insertedId) {
        Swal.fire("Success", "Review submitted successfully!", "success");
        setFormData({ name: "", role: "", feedback: "" });
        setImageFile(null);
        setLogoFile(null);
        
      } else {
        Swal.fire("Error", "Failed to submit review", "error");
      }
    } catch (error) {
      console.error("❌ Error uploading review:", error);
      Swal.fire("Error", "Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-2xl p-6 mx-auto mt-10 bg-white border border-green-500 shadow-md rounded-xl">
      <h2 className="mb-4 text-2xl font-bold text-center text-green-700">
        Add a Review
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full px-4 py-2 border rounded"
        />

        {/* Role */}
        <input
          type="text"
          name="role"
          required
          value={formData.role}
          onChange={handleChange}
          placeholder="Position (e.g. CEO of Brand)"
          className="w-full px-4 py-2 border rounded"
        />

        {/* Client Image Upload */}
        <div>
          <label className="block mb-1 font-semibold">Client Image</label>
          <div className="flex items-center gap-4">
            <label
              htmlFor="clientImage"
              className="px-4 py-2 text-white bg-green-500 rounded-lg shadow cursor-pointer hover:bg-green-600"
            >
              Choose File
            </label>
            <span className="text-sm text-gray-600">
              {imageFile ? imageFile.name : "No file chosen"}
            </span>
          </div>
          <input
            type="file"
            id="clientImage"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            required
          />
        </div>

        {/* Company Logo Upload */}
        <div>
          <label className="block mb-1 font-semibold">Company Logo</label>
          <div className="flex items-center gap-4">
            <label
              htmlFor="companyLogo"
              className="px-4 py-2 text-white bg-green-500 rounded-lg shadow cursor-pointer hover:bg-green-600"
            >
              Choose File
            </label>
            <span className="text-sm text-gray-600">
              {logoFile ? logoFile.name : "No file chosen"}
            </span>
          </div>
          <input
            type="file"
            id="companyLogo"
            accept="image/*"
            onChange={handleLogoChange}
            className="hidden"
            required
          />
        </div>

        {/* Feedback */}
        <textarea
          name="feedback"
          required
          value={formData.feedback}
          onChange={handleChange}
          placeholder="Feedback"
          rows={4}
          className="w-full px-4 py-2 border rounded"
        />

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600"
          >
            {loading ? "Uploading..." : "Submit Review"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddReview;