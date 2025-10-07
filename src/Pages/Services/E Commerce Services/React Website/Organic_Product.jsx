import organicBanner from "../../../../../src/assets/Organic-banner.jpg";
import organicCustomer from "../../../../../src/assets/Organic-customer.jpg";
import organicAdmin from "../../../../../src/assets/Organic-admin.jpg";
import { motion } from "framer-motion";
import ContactWithForm from "../ContactWithPhone";

const Organic_Product = () => {
  return (
    <div className="px-6 bg-white py-18 md:py-24 dark:bg-black">
      {/* Header */}
      <section className="w-full h-auto overflow-hidden rounded-xl">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={organicBanner}
          alt="Organic Banner"
          className="object-cover w-full h-full"
        />
      </section>

      <div>
        {/* 1. Customer Features */}
        <section className="w-full py-20 bg-white dark:bg-black">
          <div className="flex flex-col items-center gap-12 px-6 mx-auto max-w-7xl md:flex-row">
            {/* Left Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 text-left"
            >
              <h2 className="mb-6 text-3xl font-extrabold text-gray-800 dark:text-gray-100 md:text-4xl">
                Customer Features
              </h2>

              <ul className="pl-4 space-y-2 text-xl text-gray-700 list-disc dark:text-gray-100">
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
        <section className="w-full py-20 bg-white dark:bg-black">
          <div className="flex flex-col-reverse items-center gap-12 px-6 mx-auto max-w-7xl md:flex-row">
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
              <h2 className="mb-6 text-3xl font-extrabold text-gray-800 dark:text-gray-100 md:text-4xl">
                Admin Features
              </h2>

              <ul className="pl-4 space-y-2 text-xl text-gray-700 list-disc dark:text-gray-100">
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

      <ContactWithForm></ContactWithForm>
    </div>
  );
};

export default Organic_Product;
