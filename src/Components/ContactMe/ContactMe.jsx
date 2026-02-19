import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_190hdcr",
        "template_bafi61r",
        formRef.current,
        "PUFLDL1B51xBdNbBM"
      );

      setStatus("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-red-900 text-white py-16 px-6">
      {/* SECTION TITLE */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {/* CONTACT INFO */}
        <motion.div
          className="bg-black/90 p-7 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Feel free to reach out for collaboration, freelance work, or just a
            friendly hello 👋
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-500 text-lg" />
              <span className="break-all">
                ayushmagrawal.76@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-red-500 text-lg" />
              <span>+91 76669 72175</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500 text-lg" />
              <span>Pune, Maharashtra</span>
            </div>
          </div>
        </motion.div>

        {/* CONTACT FORM */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-black/90 p-7 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-center mb-6">
            Drop a Message
          </h3>

          {/* NAME */}
          <div className="mb-4">
            <label className="block text-sm mb-2">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700
              focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500
              text-white transition"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="block text-sm mb-2">Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700
              focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500
              text-white transition"
            />
          </div>

          {/* MESSAGE */}
          <div className="mb-6">
            <label className="block text-sm mb-2">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700
              focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500
              text-white transition resize-none"
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold bg-red-500
            hover:bg-red-600 active:scale-95 transition
            disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* STATUS MESSAGE */}
          {status && (
            <p
              className={`text-center mt-4 text-sm ${
                status.includes("success")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}