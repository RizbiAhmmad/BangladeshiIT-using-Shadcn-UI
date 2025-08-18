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
    <footer className="px-6 pt-16 pb-8 text-white bg-gray-900 md:px-12">
      <div className="grid grid-cols-1 gap-10 mx-auto max-w-7xl md:grid-cols-4">
        {/* Logo and Brand Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="BangladeshiIT Logo" className="w-auto h-10" />
            <h1 className="flex items-center text-2xl font-bold">
              <span className="flex">
                <span className="text-[#066938]">Bangla</span>
                <span className="text-[#eb2127]">deshi</span>
              </span>
              <span className="text-[#066938] ml-3">IT</span>
            </h1>
          </div>
          <p className="text-gray-400">
            Empowering businesses with modern digital solutions. We specialize
            in web development, branding, and marketing services.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/bangladeshiitbd" aria-label="Facebook">
              <FaFacebookF className="hover:text-[#eb2127]" />
            </a>
            <a href="https://www.linkedin.com/in/firoj-khan-liton/" aria-label="LinkedIn">
              <FaLinkedinIn className="hover:text-[#eb2127]" />
            </a>
            <a href="mailto:info@bangladeshiit.com" aria-label="Email">
              <FaEnvelope className="hover:text-[#eb2127]" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-[#eb2127]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#eb2127]">About Us</Link></li>
            <li><Link to="/blogs" className="hover:text-[#eb2127]">Blogs</Link></li>
            <li><Link to="/contact" className="hover:text-[#eb2127]">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Our Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/services/ecommerce" className="hover:text-[#eb2127]">E-Commerce Solutions</Link></li>
            <li><Link to="/services/web-development" className="hover:text-[#eb2127]">Web Development</Link></li>
            <li><Link to="/services/apps-development" className="hover:text-[#eb2127]">Apps Development</Link></li>
            <li><Link to="/services/digital-marketing" className="hover:text-[#eb2127]">Digital Marketing</Link></li>
            <li><Link to="/services/graphic-design" className="hover:text-[#eb2127]">Graphics Design</Link></li>
            <li><Link to="/services/social-media-marketing" className="hover:text-[#eb2127]">Social Media Marketing</Link></li>
            <li><Link to="/services/seo" className="hover:text-[#eb2127]">SEO Content Writing</Link></li>
            <li><Link to="/services/consulting" className="hover:text-[#eb2127]">Business Consulting</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-400">
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

      <div className="pt-6 mt-12 text-sm text-center text-gray-500 border-t border-gray-700">
        © {new Date().getFullYear()} BangladeshiIT. All rights reserved.
      </div>
    </footer>
  );
}
