import { FaSearch, FaBullhorn, FaEnvelopeOpenText, FaChartLine, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Contact from "../Contact/Contact";

const DigitalMarketing = () => {
  return (
    <section className="py-20 text-gray-800 bg-white dark:bg-black">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-wide text-red-500 uppercase">
          Digital Marketing Services
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-base text-gray-700 dark:text-white md:text-lg">
          Full-Service Digital Marketing – We handle SEO, PPC, Content Writing <br/>and Social Media under one roof.
        </p>
      </div>

      <div className="grid max-w-6xl gap-12 px-6 mx-auto md:grid-cols-2">
        {/* SEO */}
        <motion.div
          className="p-6 border-l-4 border-green-500 shadow-xl bg-gray-50 rounded-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="flex items-center gap-2 text-xl font-bold text-green-600">
            <FaSearch /> Search Engine Optimization (SEO)
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
            <li>On-Page SEO: Keyword research, meta tags, content optimization</li>
            <li>Off-Page SEO: Backlinks, guest posting, local SEO</li>
            <li>Technical SEO: Speed, mobile responsiveness, structured data</li>
            <li>E-commerce SEO: Product SEO, schema, review optimization</li>
          </ul>
          <div className="p-4 mt-4 border-l-4 border-green-400 rounded bg-green-50">
            <p className="mb-2 font-semibold text-green-700">Why We're the Right Fit?</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><FaCheckCircle className="inline mr-1 text-green-500" /> We use white-hat techniques — no black-hat shortcuts.</li>
              <li><FaCheckCircle className="inline mr-1 text-green-500" /> Data-driven strategies that deliver measurable growth.</li>
              <li><FaCheckCircle className="inline mr-1 text-green-500" /> Transparent reports with clear KPIs and progress tracking.</li>
            </ul>
          </div>
        </motion.div>

        {/* SEM */}
        <motion.div
          className="p-6 border-l-4 border-red-500 shadow-xl bg-gray-50 rounded-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="flex items-center gap-2 text-xl font-bold text-red-600">
            <FaBullhorn /> Search Engine Marketing (SEM) / PPC
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
            <li>Google Ads, Microsoft Ads</li>
            <li>Facebook, Instagram, YouTube & LinkedIn Ads</li>
            <li>Remarketing, Display Ads, and A/B testing</li>
            <li>Conversion-focused strategy with budget control</li>
          </ul>
          <div className="p-4 mt-4 border-l-4 border-red-400 rounded bg-orange-50">
            <p className="mb-2 font-semibold text-red-700">Why We're the Right Fit?</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><FaCheckCircle className="inline mr-1 text-red-500" /> ROI-focused ad campaigns with proven results.</li>
              <li><FaCheckCircle className="inline mr-1 text-red-500" /> Google Analytics & Looker Studio-based tracking.</li>
              <li><FaCheckCircle className="inline mr-1 text-red-500" /> A/B tested ad copies to boost conversions.</li>
            </ul>
          </div>
        </motion.div>

        {/* Content Marketing */}
        <motion.div
          className="p-6 border-l-4 border-blue-500 shadow-xl bg-gray-50 rounded-xl md:col-span-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600">
            <FaEnvelopeOpenText /> Content Marketing & Copywriting
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
            <li>SEO-optimized blog writing & website content</li>
            <li>Product descriptions & engaging ad copies</li>
            <li>Consistent content for social media & email marketing</li>
          </ul>
          <div className="p-4 mt-4 border-l-4 border-blue-400 rounded bg-blue-50">
            <p className="mb-2 font-semibold text-blue-700">Why We're the Right Fit?</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><FaCheckCircle className="inline mr-1 text-blue-500" /> SEO-friendly, engaging content that ranks and converts.</li>
              <li><FaCheckCircle className="inline mr-1 text-blue-500" /> Strategic content calendar for brand consistency.</li>
              <li><FaCheckCircle className="inline mr-1 text-blue-500" /> Unique voice tailored to your audience and goals.</li>
            </ul>
          </div>
        </motion.div>
      </div>
      <Contact></Contact>
    </section>
  );
};

export default DigitalMarketing;
