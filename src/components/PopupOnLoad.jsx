import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PopupOnLoad = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
      <div className="relative w-full max-w-xl overflow-hidden bg-white border shadow-2xl rounded-3xl border-white/20 sm:max-w-2xl">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute flex items-center justify-center w-10 h-10 text-lg text-gray-700 transition bg-white border border-gray-200 rounded-full shadow right-3 top-3 hover:bg-gray-100"
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="flex items-center justify-center bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
            alt="Featured"
            className="h-[70vh] w-full object-cover sm:h-[75vh]"
          />
        </div>

        <div className="flex items-center justify-center p-4 bg-white border-t border-gray-200">
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-3 text-sm font-semibold text-white transition bg-green-600 rounded-full hover:bg-green-700"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupOnLoad;
