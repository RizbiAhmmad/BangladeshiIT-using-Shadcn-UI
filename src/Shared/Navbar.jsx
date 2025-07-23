import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../assets/BangladeshiIT.jpg";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import ThemeChange from "../components/ThemeChange";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", dropdown: true },
  { name: "Blogs", href: "/blogs" },
];

const services = [
  { name: "E-Commerce Solutions", href: "/services/ecommerce" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Apps Development", href: "/services/apps-development" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Graphics Design", href: "/services/graphic-design" },
  { name: "Social Media Marketing", href: "/services/social-media-marketing" },
  { name: "SEO Content Writing", href: "/services/seo" },
  { name: "Consulting", href: "/services/consulting" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const location = useLocation();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const isServiceRoute = location.pathname.startsWith("/services");

  useEffect(() => {
    if (user?.email) {
      axiosPublic
        .get("/users/role", { params: { email: user.email } })
        .then((res) => setUserRole(res.data.role))
        .catch((err) => console.error("Role fetch error:", err));
    }
  }, [user, axiosPublic]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full transition-colors duration-300 bg-white shadow-md dark:bg-black">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2 rounded-full" />
          <h1 className="flex items-center text-2xl font-bold dark:text-white">
            <span className="flex">
              <span className="text-green-600">Bangla</span>
              <span className="text-red-600">deshi</span>
            </span>
            <span className="ml-3 text-green-600">IT</span>
          </h1>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="relative items-center hidden gap-8 md:flex">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative group">
                <div
                  onClick={() => setShowDropdown((prev) => !prev)}
                  className={`cursor-pointer font-medium flex items-center gap-1 ${
                    isServiceRoute
                      ? "text-red-600"
                      : "text-black dark:text-white hover:text-green-600"
                  }`}
                >
                  {link.name}
                  <FiChevronDown
                    className={`transition-transform ${
                      showDropdown ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-50 w-56 p-3 mt-2 bg-white rounded-md shadow-lg dark:bg-gray-800"
                    >
                      {services.map((service) => (
                        <NavLink
                          key={service.name}
                          to={service.href}
                          onClick={() => setShowDropdown(false)}
                          className={({ isActive }) =>
                            `block px-3 py-2 text-sm ${
                              isActive
                                ? "text-orange-500 font-semibold"
                                : "text-gray-700 dark:text-gray-300 hover:text-orange-500"
                            }`
                          }
                        >
                          {service.name}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `font-medium ${
                    isActive
                      ? "text-red-600"
                      : "text-black dark:text-white hover:text-green-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          )}

          {user && userRole === "admin" && (
            <NavLink
              to="/dashboard"
              className="font-medium text-black dark:text-white hover:text-green-600"
            >
              Dashboard
            </NavLink>
          )}

          <ThemeChange />

          <button
            onClick={() => navigate("/contact")}
            className="px-4 py-2 ml-6 font-semibold text-white transition bg-orange-500 rounded-full hover:bg-orange-700"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black dark:text-white md:hidden"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="px-4 bg-white shadow-md dark:bg-gray-900 md:hidden"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.05 } },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              className="flex flex-col py-4 space-y-3"
            >
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name}>
                    <div
                      onClick={() => setShowDropdown((prev) => !prev)}
                      className="flex items-center justify-between font-medium text-black cursor-pointer dark:text-white hover:text-green-600"
                    >
                      <span>{link.name}</span>
                      <FiChevronDown
                        className={`transition-transform ${
                          showDropdown ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                    <AnimatePresence>
                      {showDropdown && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-2 ml-2 space-y-2"
                        >
                          {services.map((service) => (
                            <li key={service.name}>
                              <NavLink
                                to={service.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setShowDropdown(false);
                                }}
                                className={({ isActive }) =>
                                  `block text-sm ${
                                    isActive
                                      ? "text-orange-500 font-semibold"
                                      : "text-gray-700 dark:text-gray-300 hover:text-orange-500"
                                  }`
                                }
                              >
                                {service.name}
                              </NavLink>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.li
                    key={link.name}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: -20 },
                    }}
                  >
                    <NavLink
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block font-medium ${
                          isActive
                            ? "text-red-600"
                            : "text-black dark:text-white hover:text-green-600"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.li>
                )
              )}

              {user && userRole === "admin" && (
                <motion.li
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -20 },
                  }}
                >
                  <NavLink
                    to="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="block font-medium text-black dark:text-white hover:text-green-600"
                  >
                    Dashboard
                  </NavLink>
                </motion.li>
              )}

              <motion.li
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -20 },
                }}
              >
                <ThemeChange />
              </motion.li>

              <motion.li
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -20 },
                }}
              >
                <button
                  onClick={() => {
                    navigate("/contact");
                    setIsOpen(false);
                  }}
                  className="inline-block px-4 py-2 mt-2 font-semibold text-white transition bg-orange-500 rounded-full hover:bg-orange-700"
                >
                  Contact Us
                </button>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
