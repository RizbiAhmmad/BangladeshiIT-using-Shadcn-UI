import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com"; // Import EmailJS
import { AuroraText } from "../../components/magicui/aurora-text";

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
      <div className="flex flex-col w-full max-w-5xl p-8 bg-white border border-green-500 shadow-xl rounded-xl md:flex-row md:space-x-8">
        {/* Contact Info */}
        <div className="flex flex-col justify-center mb-10 md:w-1/2 md:mb-0">
          <h2 className="mb-4 text-4xl font-extrabold text-green-700"> <AuroraText>Get in Touch</AuroraText></h2>
          <p className="mb-8 text-gray-600">
            Have questions or want to work together? Fill out the form and I’ll
            get back to you as soon as possible.
          </p>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="w-5 h-5 text-green-600" />
              <span>Info@bangladeshiit.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="w-5 h-5 text-green-600" />
              <span>+8801621741799</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="w-5 h-5 text-green-600" />
              <span>
                House#35, Road#15, Sector#14, Uttara, Dhaka-1230, Bangladesh
              </span>
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
            <div className="p-4 mb-4 font-semibold text-center text-green-700 bg-green-100 border border-green-400 rounded-md">
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
              className="block w-full px-3 pt-5 pb-2 placeholder-transparent border border-gray-300 rounded-md peer focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="Your Name"
            />
            <label htmlFor="name" className="absolute text-sm text-gray-500 transition-all left-3 top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600">
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
              className="block w-full px-3 pt-5 pb-2 placeholder-transparent border border-gray-300 rounded-md peer focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="Your Email"
            />
            <label htmlFor="email" className="absolute text-sm text-gray-500 transition-all left-3 top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600">
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
              className="block w-full px-3 pt-5 pb-2 placeholder-transparent border border-gray-300 rounded-md resize-none peer focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="Your Message"
            />
            <label htmlFor="message" className="absolute text-sm text-gray-500 transition-all left-3 top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600">
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition bg-green-600 rounded-md shadow-md hover:bg-orange-600 shadow-green-300/50"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map */}
      <div className="w-full max-w-6xl mt-12 overflow-hidden border border-green-500 shadow-xl rounded-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6136.249319004187!2d90.3797675895438!3d23.867067559826324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c41bd3575995%3A0x52ad89621386c4c4!2sSector%2014%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1750355371999!5m2!1sen!2sbd"
          className="w-full h-[300px] md:h-[450px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
