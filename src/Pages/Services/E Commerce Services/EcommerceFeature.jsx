import { motion } from "framer-motion";

const sections = [
  {
    title: "🛍 Online Storefront & Shopping Experience",
    points: [
      "Visually Rich Product Pages: Showcase garments with high-resolution images, zoom features, and style variations (color, size, fit).",
      "Localized UX: Supports Bangla language, BDT pricing, and culturally familiar layouts.",
      "Mobile-Optimized Design: Seamless browsing and checkout across devices with fast load times.",
      "Wishlist & Save for Later: Encourages repeat visits with favorite item bookmarking.",
    ],
  },
  {
    title: "💳 Checkout & Payment Integration",
    points: [
      "Flexible Payment Options: Accepts bKash, Nagad, Rocket, debit/credit cards, and cash-on-delivery.",
      "Guest Checkout: Frictionless purchases without mandatory account creation.",
      "Coupon & Discount Engine: Promo codes, seasonal sales, and bundle offers.",
      "Secure Transactions: SSL encryption and fraud detection protocols.",
    ],
  },
  {
    title: "📦 Order Management & Fulfillment",
    points: [
      "Real-Time Order Tracking: SMS/email updates from confirmation to delivery.",
      "Smart Logistics Integration: Automated courier labels and delivery coordination.",
      "Return & Exchange Portal: Clear policies with easy-to-use forms.",
    ],
  },
  {
    title: "📊 Marketing & Customer Engagement",
    points: [
      "Email & SMS Campaigns: Automated cart abandonment, new arrivals, loyalty rewards.",
      "Social Media Integration: Sync products with Facebook, Instagram, and TikTok shops.",
      "Review & Rating System: Builds trust with verified feedback.",
      "Referral & Loyalty Programs: Encourages word-of-mouth growth and repeat purchases.",
    ],
  },
  {
    title: "📈 Analytics & Business Insights",
    points: [
      "Sales Dashboard: Tracks revenue, conversion rates, and top-performing products.",
      "Customer Segmentation: Identifies high-value shoppers for tailored campaigns.",
      "Product Performance Reports: Trend analysis by category, season, and price.",
      "Inventory Sync: Prevents overselling with POS integration.",
    ],
  },
];

export default function EcommerceFeature() {
  return (
    <div className="px-6 py-16 bg-white dark:bg-black">
      <h2 className="mb-12 text-3xl font-bold text-center text-black dark:text-white">
        🚀 E-Commerce Website Features
      </h2>

      <div className="grid gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative p-6 transition bg-white border border-green-200 shadow-lg dark:bg-gray-900 shadow-green-200 hover:bg-green-200 rounded-2xl dark:border-gray-700 hover:shadow-2xl"
          >
            <div className="items-center mb-4 ">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {section.title}
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              {section.points.map((point, i) => (
                <li key={i} className="leading-relaxed">
                  • {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
