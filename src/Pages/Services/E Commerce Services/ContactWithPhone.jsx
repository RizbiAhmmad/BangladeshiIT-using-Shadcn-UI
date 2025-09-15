import React, { useState, useRef } from "react";
import { auth, db } from "../../../firebase/firebase.config";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactWithPhone() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [otpSent, setOtpSent] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const recaptchaRendered = useRef(false);

  // ✅ Setup reCAPTCHA (only once)
  function setupRecaptcha() {
    if (!recaptchaRendered.current) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible", // or 'normal' if you want visible
        callback: (response) => {
          console.log("reCAPTCHA solved", response);
        },
        "expired-callback": () => {
          console.warn("reCAPTCHA expired, reset needed");
        },
      });
      recaptchaRendered.current = true;
    }
  }

  // ✅ Send OTP
  async function sendOtp(e) {
    e.preventDefault();
    if (!phone) return alert("Phone number দিন।");

    try {
      setLoading(true);
      setupRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      const fullPhone = phone.startsWith("+") ? phone : `+88${phone}`; // Bangladesh format

      const result = await signInWithPhoneNumber(auth, fullPhone, appVerifier);
      setConfirmationResult(result);
      setOtpSent(true);
      setLoading(false);
      alert("OTP পাঠানো হয়েছে — ফোন চেক করুন।");
    } catch (err) {
      console.error("OTP send error:", err);
      setLoading(false);
      alert("OTP পাঠাতে সমস্যা: " + err.message);
      // reCAPTCHA reset
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
      }
      recaptchaRendered.current = false;
    }
  }

  // ✅ Verify OTP + Save data
  async function verifyOtpAndSubmit(e) {
    e.preventDefault();
    if (!confirmationResult) return alert("প্রথমে OTP পাঠান।");

    try {
      setLoading(true);
      await confirmationResult.confirm(otp);

      // Firestore-এ ডেটা সেভ
      await addDoc(collection(db, "contactRequests"), {
        category,
        name,
        company,
        phone,
        message,
        createdAt: serverTimestamp(),
      });

      setLoading(false);
      alert("OTP Verified ✅ & Form Submitted!");

      // Reset form
      setCategory("");
      setName("");
      setCompany("");
      setPhone("");
      setMessage("");
      setOtp("");
      setOtpSent(false);
      setConfirmationResult(null);
    } catch (err) {
      console.error("OTP verification error:", err);
      setLoading(false);
      alert("OTP verification failed: " + err.message);
    }
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="mb-6 text-3xl text-center">ডেমো দেখতে সাবমিট করুন</h2>
      <form className="space-y-4">
        <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border rounded"
          >
            <option value="">বিসনেস ক্যাটাগরি সিলেক্ট করুন</option>
            <option value="it">IT</option>
            <option value="marketing">Marketing</option>
            <option value="design">Design</option>
          </select>
        </div>

        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="আপনার সম্পূর্ণ নাম"
            className="w-full p-3 border rounded"
          />
        </div>

        <div>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="প্রাইজ বা কম্পানির নাম"
            className="w-full p-3 border rounded"
          />
        </div>

        <div>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="সঠিক ফোন নাম্বার (e.g., 017xxxxxxxx)"
            className="w-full p-3 border rounded"
          />
        </div>

        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="আপনার রিকোয়্যারমেন্ট বর্ণন করুন (optional)"
            className="w-full p-3 border rounded"
          />
        </div>

        {/* reCAPTCHA container */}
        <div id="recaptcha-container"></div>

        {!otpSent ? (
          <button
            onClick={sendOtp}
            className="px-6 py-2 text-white bg-green-600 rounded"
          >
            {loading ? "Sending..." : "OTP পাঠান ও Verify করুন"}
          </button>
        ) : (
          <>
            <div>
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="OTP লিখুন"
                className="w-1/2 p-2 border rounded"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={verifyOtpAndSubmit}
                className="px-6 py-2 text-white bg-green-600 rounded"
              >
                {loading ? "Verifying..." : "OTP Verify & Submit"}
              </button>
              <button
                onClick={sendOtp}
                type="button"
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Resend OTP
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
