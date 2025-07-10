import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/BangladeshiIT.jpg";

export default function Footer() {
  // useEffect(() => {
  //   var Tawk_API = Tawk_API || {};
  //   var Tawk_LoadStart = new Date();
  //   const s1 = document.createElement("script");
  //   s1.async = true;
  //   s1.src = "https://embed.tawk.to/68526c32d55e2a190d82ad05/1iu0vd9s5";
  //   s1.charset = "UTF-8";
  //   s1.setAttribute("crossorigin", "*");
  //   document.body.appendChild(s1);

  //   return () => {
  //     document.body.removeChild(s1);
  //   };
  // }, []);

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Brand Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="BangladeshiIT Logo" className="h-10 w-auto" />
            <h1 className="text-2xl font-bold flex items-center">
              <span className="flex">
                <span className="text-green-600">Bangla</span>
                <span className="text-red-600">deshi</span>
              </span>
              <span className="text-green-600 ml-3">IT</span>
            </h1>
          </div>
          <p className="text-gray-400">
            Empowering businesses with modern digital solutions. We specialize
            in web development, branding, and marketing services.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/bangladeshiitbd" aria-label="Facebook">
              <FaFacebookF className="hover:text-orange-500" />
            </a>
            <a href="https://www.linkedin.com/in/firoj-khan-liton/" aria-label="LinkedIn">
              <FaLinkedinIn className="hover:text-orange-500" />
            </a>
            <a href="mailto:info@bangladeshiit.com" aria-label="Email">
              <FaEnvelope className="hover:text-orange-500" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-500">About Us</Link></li>
            <li><Link to="/blogs" className="hover:text-orange-500">Blogs</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/services/ecommerce" className="hover:text-orange-500">E-Commerce Solutions</Link></li>
            <li><Link to="/services/web-development" className="hover:text-orange-500">Web Development</Link></li>
            <li><Link to="/services/apps-development" className="hover:text-orange-500">Apps Development</Link></li>
            <li><Link to="/services/digital-marketing" className="hover:text-orange-500">Digital Marketing</Link></li>
            <li><Link to="/services/graphic-design" className="hover:text-orange-500">Graphics Design</Link></li>
            <li><Link to="/services/social-media-marketing" className="hover:text-orange-500">Social Media Marketing</Link></li>
            <li><Link to="/services/seo" className="hover:text-orange-500">SEO Content Writing</Link></li>
            <li><Link to="/services/consulting" className="hover:text-orange-500">Business Consulting</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone /> +8801621741799
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@bangladeshiit.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt />
              House#35, Road#15, Sector#14, Uttara, Dhaka-1230, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BangladeshiIT. All rights reserved.
      </div>
    </footer>
  );
}
