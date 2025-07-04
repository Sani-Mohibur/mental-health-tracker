import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal"; // Adjust path if needed

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 py-4 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600 dark:text-gray-400">
        <p className="mb-2 sm:mb-0 text-center sm:text-left">
          &copy; {new Date().getFullYear()} Mental Health Tracker. All rights
          reserved.
        </p>
        <div className="flex gap-6">
          <button
            onClick={() => setShowPrivacy(true)}
            className="hover:underline hover:text-indigo-500 transition cursor-pointer"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setShowTerms(true)}
            className="hover:underline hover:text-indigo-500 transition cursor-pointer"
          >
            Terms
          </button>
          <Link
            to="/contact"
            className="hover:underline hover:text-indigo-500 transition"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Privacy Modal */}
      <Modal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title="Privacy Policy"
      >
        <p>
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal information when you use the
          Mental Health Tracker app.
        </p>
        <p>
          <strong>Information We Collect:</strong> We may collect personal data
          like your name, email, and mood/journal info.
        </p>
        <p>
          <strong>How We Use It:</strong> To provide, improve, and personalize
          your experience.
        </p>
        <p>
          <strong>Security:</strong> We take appropriate steps to protect your
          data but cannot guarantee complete security.
        </p>
      </Modal>

      {/* Terms Modal */}
      <Modal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms and Conditions"
      >
        <p>
          By using the Mental Health Tracker app, you agree to use it
          responsibly and legally.
        </p>
        <p>
          <strong>Use of App:</strong> You agree not to misuse the app or
          infringe on the rights of others.
        </p>
        <p>
          <strong>Intellectual Property:</strong> All content belongs to Mental
          Health Tracker and is protected.
        </p>
        <p>
          <strong>Disclaimer:</strong> This app is not a replacement for
          professional medical advice.
        </p>
      </Modal>
    </footer>
  );
};

export default Footer;
