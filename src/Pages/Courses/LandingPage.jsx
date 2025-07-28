import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const LandingPage = ({ scrollToCourses }) => {
  return (
    <div className="text-gray-800 bg-white dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="py-24 text-white bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold leading-tight md:text-5xl"
          >
            আপনার ব্যবসাকে সফল করতে শিখুন <span className="text-orange-300">প্রফেশনাল স্কিল</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-lg md:text-xl"
          >
            সম্পূর্ণ ফ্রি কোর্স | প্রফেশনালদের দ্বারা তৈরি করা
          </motion.p>
          <motion.button
            onClick={scrollToCourses}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 mt-8 font-semibold text-white transition bg-orange-500 rounded hover:bg-orange-600"
          >
            কোর্সসমূহ দেখুন
          </motion.button>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-5xl px-4 mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold text-green-700"
          >
            কেন এই ফ্রি কোর্স?
          </motion.h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            অনেক উদ্যোক্তা শুধুমাত্র সঠিক দিক নির্দেশনার অভাবে ব্যবসায় পিছিয়ে পড়েন। আমাদের লক্ষ্য— যারা শুরু করতে চাচ্ছেন বা উন্নতি করতে চাচ্ছেন, তাদেরকে সঠিক জ্ঞান দিয়ে এগিয়ে যেতে সাহায্য করা।
          </p>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-10 text-3xl font-bold text-center text-orange-600">আপনি যা শিখবেন</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {["ব্যবসা শুরু করার মৌলিক ধারণা", "ফেসবুক মার্কেটিং ও ডিজিটাল স্ট্র্যাটেজি", "ই-কমার্স সেটআপ ও ম্যানেজমেন্ট", "গ্রাহক ধরে রাখার কৌশল", "ব্র্যান্ডিং ও কনটেন্ট মার্কেটিং", "বিনিয়োগ ও লাভ ক্ষতির বিশ্লেষণ"].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 bg-white rounded shadow dark:bg-gray-800"
              >
                <FaCheckCircle className="mt-1 text-green-600" />
                <p className="text-gray-800 dark:text-gray-200">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center bg-green-100 dark:bg-gray-700">
        <motion.h3
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-bold text-green-800 dark:text-white"
        >
          এখনই শুরু করুন!
        </motion.h3>
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
          এই কোর্সগুলো একদম ফ্রি, শুধুমাত্র আপনার শেখার ইচ্ছেটাই দরকার।
        </p>       
      </section>
    </div>
  );
};

export default LandingPage;
