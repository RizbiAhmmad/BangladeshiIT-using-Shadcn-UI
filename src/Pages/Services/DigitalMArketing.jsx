import { FaSearch, FaBullhorn, FaEnvelopeOpenText, FaChartLine, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Contact from "../Contact/Contact";

const DigitalMarketing = () => {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-red-500 uppercase tracking-wide">
          Digital Marketing Services
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-gray-700">
          Full-Service Digital Marketing – We handle SEO, PPC, Content Writing <br/>and Social Media under one roof.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {/* SEO */}
        <motion.div
          className="p-6 bg-gray-50 shadow-xl rounded-xl border-l-4 border-green-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold flex items-center gap-2 text-green-600">
            <FaSearch /> Search Engine Optimization (SEO)
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
            <li>On-Page SEO: Keyword research, meta tags, content optimization</li>
            <li>Off-Page SEO: Backlinks, guest posting, local SEO</li>
            <li>Technical SEO: Speed, mobile responsiveness, structured data</li>
            <li>E-commerce SEO: Product SEO, schema, review optimization</li>
          </ul>
          <div className="mt-4 bg-green-50 border-l-4 border-green-400 p-4 rounded">
            <p className="font-semibold text-green-700 mb-2">Why We're the Right Fit?</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li><FaCheckCircle className="inline text-green-500 mr-1" /> We use white-hat techniques — no black-hat shortcuts.</li>
              <li><FaCheckCircle className="inline text-green-500 mr-1" /> Data-driven strategies that deliver measurable growth.</li>
              <li><FaCheckCircle className="inline text-green-500 mr-1" /> Transparent reports with clear KPIs and progress tracking.</li>
            </ul>
          </div>
        </motion.div>

        {/* SEM */}
        <motion.div
          className="p-6 bg-gray-50 shadow-xl rounded-xl border-l-4 border-red-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold flex items-center gap-2 text-red-600">
            <FaBullhorn /> Search Engine Marketing (SEM) / PPC
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
            <li>Google Ads, Microsoft Ads</li>
            <li>Facebook, Instagram, YouTube & LinkedIn Ads</li>
            <li>Remarketing, Display Ads, and A/B testing</li>
            <li>Conversion-focused strategy with budget control</li>
          </ul>
          <div className="mt-4 bg-orange-50 border-l-4 border-red-400 p-4 rounded">
            <p className="font-semibold text-red-700 mb-2">Why We're the Right Fit?</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li><FaCheckCircle className="inline text-red-500 mr-1" /> ROI-focused ad campaigns with proven results.</li>
              <li><FaCheckCircle className="inline text-red-500 mr-1" /> Google Analytics & Looker Studio-based tracking.</li>
              <li><FaCheckCircle className="inline text-red-500 mr-1" /> A/B tested ad copies to boost conversions.</li>
            </ul>
          </div>
        </motion.div>

        {/* Content Marketing */}
        <motion.div
          className="p-6 bg-gray-50 shadow-xl rounded-xl border-l-4 border-blue-500 md:col-span-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold flex items-center gap-2 text-blue-600">
            <FaEnvelopeOpenText /> Content Marketing & Copywriting
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
            <li>SEO-optimized blog writing & website content</li>
            <li>Product descriptions & engaging ad copies</li>
            <li>Consistent content for social media & email marketing</li>
          </ul>
          <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
            <p className="font-semibold text-blue-700 mb-2">Why We're the Right Fit?</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li><FaCheckCircle className="inline text-blue-500 mr-1" /> SEO-friendly, engaging content that ranks and converts.</li>
              <li><FaCheckCircle className="inline text-blue-500 mr-1" /> Strategic content calendar for brand consistency.</li>
              <li><FaCheckCircle className="inline text-blue-500 mr-1" /> Unique voice tailored to your audience and goals.</li>
            </ul>
          </div>
        </motion.div>
      </div>
      <Contact></Contact>
    </section>
  );
};

export default DigitalMarketing;
