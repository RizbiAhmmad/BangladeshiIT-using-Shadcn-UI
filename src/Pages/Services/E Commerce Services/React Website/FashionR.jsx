import FashionBanner from "../../../../../src/assets/Fashion-banner.jpg";
import organicCustomer from "../../../../../src/assets/Organic-customer.jpg";
import organicAdmin from "../../../../../src/assets/Organic-admin.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";

const FashionR = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone) {
      return Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Name and phone are required.",
      });
    }

    const phoneRegex = /^01\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Phone Number",
        text: "Please enter a valid 11-digit Bangladeshi phone number starting with 01.",
      });
    }

    setLoading(true);

    try {
      // POST request to backend
      await axios.post("https://api.bangladeshiit.com/contactRequests", {
        name,
        company,
        phone,
        message,
        createdAt: new Date(),
      });

      setLoading(false);

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Form submitted successfully ✅",
        timer: 2000,
        showConfirmButton: false,
      });
      navigate("/react-demo?type=fashion");
      
    } catch (err) {
      console.error("Form submission error:", err);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="px-6 bg-white py-18 md:py-24 dark:bg-black">
      {/* Header */}
      <section className="w-full h-auto overflow-hidden rounded-xl">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={FashionBanner}
          alt="Fashion Banner"
          className="object-cover w-full h-full"
        />
      </section>

      <div>
        {/* 1. Customer Features */}
        <section className="w-full py-10 bg-white dark:bg-black">
          <div className="flex flex-col items-center max-w-6xl gap-6 px-6 mx-auto md:flex-row">
            {/* Left Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 text-left"
            >
              <h2 className="mb-6 text-2xl font-extrabold text-gray-800 dark:text-gray-100 md:text-4xl">
                Customer Features
              </h2>

              <ul className="pl-4 space-y-2 text-gray-700 list-disc text-md md:text-xl dark:text-gray-100">
                <li>Cross-Platform Compatible</li>
                <li>Fully responsive UI</li>
                <li>Order Tracking</li>
                <li>Product Details & Variants</li>
                <li>Discounts & Coupons</li>
                <li>Personalised List & Quick Reorder</li>
                <li>Real-time Stock Availability</li>
                <li>Delivery Status</li>
                <li>Customer Review</li>
              </ul>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1"
            >
              <img
                src={organicCustomer}
                alt="Customer Features"
                className="w-full shadow-lg rounded-xl"
              />
            </motion.div>
          </div>
        </section>

        {/* 2. Admin Features */}
        <section className="w-full py-10 bg-white dark:bg-black">
          <div className="flex flex-col-reverse items-center max-w-6xl gap-6 px-6 mx-auto md:flex-row">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1"
            >
              <img
                src={organicAdmin}
                alt="Admin Features"
                className="w-full shadow-lg rounded-xl"
              />
            </motion.div>

            {/* Right Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 text-left"
            >
              <h2 className="mb-6 text-2xl font-extrabold text-gray-800 dark:text-gray-100 md:text-4xl">
                Admin Features
              </h2>

              <ul className="pl-4 space-y-2 text-gray-700 list-disc text-md md:text-xl dark:text-gray-100">
                <li>Discounts, Coupons, Tax Rate management</li>
                <li>Flash Deals & Announcement Systems</li>
                <li>Intuitive Dashboard</li>
                <li>Push Notifications</li>
                <li>Brand management</li>
                <li>Shipping management</li>
                <li>Payment Method management</li>
                <li>Multi-admin function</li>
                <li>POS Management & Inventory Sync</li>
                <li>Customer Segmentation</li>
                <li>Analytic Reports (Sales, Revenues, Expense, Stocks)</li>
              </ul>
            </motion.div>
          </div>
        </section>
      </div>

      <div className="max-w-xl mx-auto">
        <h2 className="mb-6 text-2xl font-bold text-center text-black md:text-3xl dark:text-white">
          Submit to Request a Demo
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
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
              type="number"
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
    </div>
  );
};

export default FashionR;
