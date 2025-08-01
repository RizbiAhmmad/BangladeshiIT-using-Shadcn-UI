import React from "react";
import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaImages,
  FaAd,
  FaPrint,
  FaTshirt,
  FaCheckCircle,
} from "react-icons/fa";
import Contact from "../Contact/Contact";

const GraphicsDesign = () => {
  return (
    <section className="py-20 text-gray-800 bg-white dark:bg-black ">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-wide text-red-500 uppercase">
          Graphics Design Services
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-base text-gray-700 dark:text-white md:text-lg">
          From striking logos to engaging social media creatives,<br /> we design
          everything you need to build a powerful brand presence.
        </p>
      </div>

      <div className="grid max-w-6xl gap-12 px-6 mx-auto md:grid-cols-2">

        {/* Logos & Branding */}
        <motion.div
          className="p-6 border-l-4 border-yellow-500 shadow-xl bg-gray-50 rounded-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="flex items-center gap-2 text-xl font-bold text-yellow-600">
            <FaPaintBrush /> 1. Logos & Branding
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
            <li>Logo Design: Crafting distinctive and memorable logos</li>
            <li>Brand Identity Design: Cohesive systems including logo, color palette, typography, and style</li>
            <li>Business Card Design: Sleek and professional first impression</li>
          </ul>
        </motion.div>

        {/* Social Media Designs */}
        <motion.div
          className="p-6 border-l-4 border-blue-500 shadow-xl bg-gray-50 rounded-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600">
            <FaImages /> 2. Social Media Designs
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
            <li>Social Media Graphics: On-brand visuals for Facebook, Instagram, LinkedIn</li>
            <li>Profile & Cover Images: Ensures brand consistency</li>
            <li>Blog Graphics: Visuals for blog headers and highlights</li>
          </ul>
        </motion.div>

        {/* Digital Marketing Design */}
        <motion.div
          className="p-6 border-l-4 border-red-500 shadow-xl bg-gray-50 rounded-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="flex items-center gap-2 text-xl font-bold text-red-600">
            <FaAd /> 3. Digital Marketing Design
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
            <li>Digital Ads: High-converting creatives for Google, Facebook, Instagram</li>
            <li>Email Graphics: Branded visuals for newsletters and campaigns</li>
            <li>Web & Display Banners: Optimized for performance</li>
          </ul>
        </motion.div>

        {/* Print Design */}
        <motion.div
          className="p-6 border-l-4 border-green-500 shadow-xl bg-gray-50 rounded-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="flex items-center gap-2 text-xl font-bold text-green-600">
            <FaPrint /> 4. Print Design
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
            <li>Flyer Design: Promotional flyers for offers & events</li>
            <li>Poster Design: Eye-catching posters with clear messaging</li>
            <li>Brochure Design: Professionally laid out for businesses</li>
            <li>Business Card Design: For networking & in-hand promotion</li>
          </ul>
        </motion.div>

        {/* Apparel & Packaging Design */}
        <motion.div
          className="p-6 border-l-4 border-purple-500 shadow-xl bg-gray-50 rounded-xl md:col-span-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="flex items-center gap-2 text-xl font-bold text-purple-600">
            <FaTshirt /> 5. Apparel & Packaging Design
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
            <li>T-Shirt / Jersey Design: Custom graphics for branded clothing, events, teams</li>
            <li>Packaging Design: Attractive packaging to enhance product appeal</li>
            <li>Label Design: For bottles, containers, and boxed products</li>
          </ul>
        </motion.div>
      </div>

      <Contact />
    </section>
  );
};

export default GraphicsDesign;
