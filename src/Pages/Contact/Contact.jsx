import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com"; // Import EmailJS
import { AuroraText } from "../../components/magicui/aurora-text";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_hxfi48t", // EmailJS service ID
        "template_nog7mc4", // EmailJS template ID
        form,
        "bKTKgO_yAN1KTZBge" // EmailJS user/public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitted(true);
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setSubmitted(false), 3000);
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };
  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-16 mt-4 bg-white dark:bg-black">
      {/* Contact Card */}
      <div className="flex flex-col w-full max-w-5xl p-8 bg-white border border-[#066938] shadow-xl rounded-xl md:flex-row md:space-x-8">
        {/* Contact Info */}
        <div className="flex flex-col justify-center mb-10 md:w-1/2 md:mb-0">
          <h2 className="mb-4 text-4xl font-extrabold text-[#066938]">
            {" "}
            <AuroraText>Get in Touch</AuroraText>
          </h2>
          <p className="mb-8 text-gray-600">
            Have questions or want to work together? Fill out the form and I’ll
            get back to you as soon as possible.
          </p>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="w-5 h-5 text-[#066938]" />
              <span>Info@bangladeshiit.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="w-5 h-5 text-[#066938]" />
              <span>+8801621741799</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="w-5 h-5 text-[#066938]" />
              <span>House 30, Road 10, Nikunja-2, Dhaka-1229, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 md:w-1/2"
          noValidate
          autoComplete="off"
        >
          {submitted && (
            <div className="p-4 mb-4 font-semibold text-center text-[#066938] bg-green-100 border border-[#066938] rounded-md">
              Thanks for reaching out! I will get back to you soon.
            </div>
          )}

          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="block w-full px-3 pt-5 pb-2 placeholder-transparent border border-gray-300 rounded-md peer focus:border-[#066938] focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="Your Name"
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-gray-500 transition-all left-3 top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600"
            >
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="block w-full px-3 pt-5 pb-2 placeholder-transparent border border-gray-300 rounded-md peer focus:border-[#066938] focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="Your Email"
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 transition-all left-3 top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600"
            >
              Your Email
            </label>
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
              className="block w-full px-3 pt-5 pb-2 placeholder-transparent border border-gray-300 rounded-md resize-none peer focus:border-[#066938] focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="Your Message"
            />
            <label
              htmlFor="message"
              className="absolute text-sm text-gray-500 transition-all left-3 top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600"
            >
              Your Message
            </label>
          </div>

          {/* <button
            type="submit"
            className="w-full py-3 border-2 border-[#eb2127] font-bold text-white transition bg-[#066938] rounded-md shadow-md hover:bg-[#05532c] shadow-green-300/50"
          >
            Send Message
          </button> */}

          <motion.button
            type="submit"
            className="relative  w-full px-5 py-3 mt-2 text-md font-semibold text-white 
                               rounded-full overflow-hidden group
                               bg-gradient-to-t from-[#006752] to-[#15C300] 
                               shadow-md transition-all duration-300"
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Send Message
            </span>

            {/* Hover shine effect */}
            <span className="absolute inset-0 transition-transform duration-500 -translate-x-full bg-white opacity-20 group-hover:translate-x-0"></span>
          </motion.button>
        </form>
      </div>

      {/* Map */}
      <div className="w-full max-w-6xl mt-12 overflow-hidden border border-[#066938] shadow-xl rounded-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.10161948546374!2d90.41657317561678!3d23.831897998132586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65e7ab0e28b%3A0xb470272c941b35ee!2sHouse%2030%20Rd%20No.%2010%2C%20Dhaka%201229!5e0!3m2!1sen!2sbd!4v1756565411114!5m2!1sen!2sbd"
          className="w-full h-[300px] md:h-[450px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
