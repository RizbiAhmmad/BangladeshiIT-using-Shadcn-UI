import fashionImg from "../../../../../src/assets/FashionPOS.jpg";
import { motion } from "framer-motion";
import ContactWithForm from "../ContactWithPhone";

const Organic_Product = () => {
  return (
    <div className="px-6 py-24 bg-gray-50">
      {/* Header */}
      <div className="w-full bg-[#fff] dark:bg-slate-900 rounded-md relative overflow-hidden py-16">
        <header className="flex flex-col items-center justify-between gap-12 px-8 lg:flex-row lg:gap-0">
          <motion.div
            className="w-full lg:w-[60%]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          >
            <img src={fashionImg} alt="Fashion POS" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full dark:text-[#abc2d3] lg:w-[40%]"
          >
            <motion.h2
              className="mb-4 text-2xl font-bold text-right text-gray-900 md:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Fashion Retail Management <br></br> & POS Software
            </motion.h2>
            <motion.p
              className="max-w-3xl mx-auto mb-12 text-[18px] text-right text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Our specialized software is built to handle the unique demands of
              a fashion business, simplifying complex inventory management for
              different sizes, colors, and styles. Connect your brick-and-mortar
              stores with your e-commerce platform for a true omnichannel
              experience, allowing you to manage everything—from sales to
              customer loyalty programs—from a single, powerful hub.
            </motion.p>
            <div className="flex justify-end gap-4">
              <motion.button
                className="px-6 py-3 font-bold text-white bg-[#DC0155] rounded-md shadow-md hover:bg-[#b80f3a] transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Call Now
              </motion.button>

              <motion.button
                className="px-6 py-3 font-bold text-white bg-[#DC0155] rounded-md shadow-md hover:bg-[#b80f3a] transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </header>

        {/* Decorative blur */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="w-[120px] h-[120px] bg-[#DC0155] blur-[90px] absolute bottom-[80px] right-[80px]"
        ></motion.div>
      </div>

     <div>
      {/* 1. Core POS & Sales Management */}
      <section className="w-full py-20 bg-gray-50">
        <div className="flex flex-col-reverse items-center max-w-6xl gap-12 px-6 mx-auto md:flex-row">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-left"
          >
            <h2 className="mb-6 text-3xl font-extrabold text-gray-800 md:text-4xl">
              Core POS & Sales Management
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="font-semibold">Fast and Flexible Transactions:</p>
              <p className="pl-4">
                Offers quick checkouts, split-tender payments (accepting cash, card, and mobile wallets), and an easy-to-use interface.
              </p>

              <p className="font-semibold">Customer Experience Tools:</p>
              <p className="pl-4">
                Includes customizable receipt templates, integrated gift card functionality, and loyalty features to foster repeat business.
              </p>

              <p className="font-semibold">Offline Capability:</p>
              <p className="pl-4">
                An offline mode allows transactions to continue even without an internet connection, with data automatically syncing to the cloud when connectivity is restored.
              </p>

              <p className="font-semibold">Bangladeshi Market Specifics:</p>
              <p className="pl-4">
                Natively supports BDT transactions, local mobile wallets (bKash, Nagad, Rocket), and is compliant with local tax and VAT rules.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="POS System"
              className="w-full shadow-lg rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Inventory Management */}
      <section className="w-full py-20 bg-gray-50">
        <div className="flex flex-col-reverse items-center max-w-6xl gap-12 px-6 mx-auto md:flex-row">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              alt="Inventory Management"
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
            <h2 className="mb-6 text-3xl font-extrabold text-gray-800 md:text-4xl">
              Inventory Management
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="font-semibold">Real-time Tracking:</p>
              <p className="pl-4">
                Provides a unified view of inventory across all outlets and warehouses, with real-time stock level monitoring.
              </p>

              <p className="font-semibold">Automated Alerts:</p>
              <p className="pl-4">
                Sends automated alerts (SMS or email) when stock levels for an item drop below a predefined threshold to prevent stockouts and lost sales.
              </p>

              <p className="font-semibold">Efficient Operations:</p>
              <p className="pl-4">
                Uses barcode and SKU scanning for efficient tasks like receiving new shipments, transferring stock, and performing cycle counts.
              </p>

              <p className="font-semibold">Strategic Stocking:</p>
              <p className="pl-4">
                Features like ABC analysis help identify and prioritize high-value garments, while predictive forecasting algorithms optimize stock levels based on past sales and trends.
              </p>

              <p className="font-semibold">Profitability Focus:</p>
              <p className="pl-4">
                Custom alerts flag low-margin or slow-moving items to help clear inventory profitably.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Business Intelligence & Analytics */}
      <section className="w-full py-20 bg-gray-50">
        <div className="flex flex-col-reverse items-center max-w-6xl gap-12 px-6 mx-auto md:flex-row">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-left"
          >
            <h2 className="mb-6 text-3xl font-extrabold text-gray-800 md:text-4xl">
              Business Intelligence & Analytics
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="font-semibold">Integrated Dashboard:</p>
              <p className="pl-4">
                Provides a centralized dashboard for all sales, inventory, and customer data.
              </p>

              <p className="font-semibold">Actionable Insights:</p>
              <p className="pl-4">
                Delivers deep insights into customer behaviors, seasonal trends, and collection performance.
              </p>

              <p className="font-semibold">Data-Driven Decisions:</p>
              <p className="pl-4">
                Enables users to run performance reports, compare outlet results, and pinpoint top-performing products.
              </p>

              <p className="font-semibold">Custom Reporting:</p>
              <p className="pl-4">
                Supports cluster-based reporting to analyze performance across similar stores or customer segments.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
              alt="Business Analytics"
              className="w-full shadow-lg rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. Usability & Support */}
      <section className="w-full py-20 bg-gray-50">
        <div className="flex flex-col-reverse items-center max-w-6xl gap-12 px-6 mx-auto md:flex-row">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
              alt="Support"
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
            <h2 className="mb-6 text-3xl font-extrabold text-gray-800 md:text-4xl">
              Usability & Support (Bangladeshi Context)
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="font-semibold">Local Language Support:</p>
              <p className="pl-4">Bangla UI and help texts, accessible to non-technical staff.</p>

              <p className="font-semibold">Dedicated Local Support:</p>
              <p className="pl-4">24/7 support via phone, chat, or email to ensure zero downtime.</p>

              <p className="font-semibold">User-Friendly Interface:</p>
              <p className="pl-4">Drag-and-drop menu reduces training time and human error.</p>

              <p className="font-semibold">Role-Based Access:</p>
              <p className="pl-4">Ensures sensitive data remains secure with proper access control.</p>

              <p className="font-semibold">Customization:</p>
              <p className="pl-4">Provides local customization for specific business needs.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Strategic Business Benefits */}
      <section className="w-full py-20 bg-gray-50">
        <div className="flex flex-col-reverse items-center max-w-6xl gap-12 px-6 mx-auto md:flex-row">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-left"
          >
            <h2 className="mb-6 text-3xl font-extrabold text-gray-800 md:text-4xl">
              Strategic Business Benefits
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="font-semibold">Accelerate Time to Market:</p>
              <p className="pl-4">Streamline operations for faster product rollouts.</p>

              <p className="font-semibold">Increase Productivity:</p>
              <p className="pl-4">Leverage automation and intuitive tools.</p>

              <p className="font-semibold">Boost Collaboration & Innovation:</p>
              <p className="pl-4">Provide a unified platform for teamwork.</p>

              <p className="font-semibold">Maximize Margins:</p>
              <p className="pl-4">Use strategic inventory management and analytics.</p>

              <p className="font-semibold">Improve Decision-Making:</p>
              <p className="pl-4">Gain insights from comprehensive reporting.</p>

              <p className="font-semibold">Source Sustainably:</p>
              <p className="pl-4">Optimize stock and reduce waste with smarter forecasting.</p>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Business Benefits"
              className="w-full shadow-lg rounded-xl"
            />
          </motion.div>
        </div>
      </section>
    </div>
    
    <ContactWithForm></ContactWithForm>
    </div>
    
  );
};

export default Organic_Product;
