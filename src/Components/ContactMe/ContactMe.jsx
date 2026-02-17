import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        'service_190hdcr',
        'template_bafi61r',
        form.current,
        'PUFLDL1B51xBdNbBM',
      )
      .then(
        (result) => {
          setMessage('Message sent successfully!');
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          setMessage('Failed to send message. Try again!');
          console.log(error);
          setLoading(false);
        },
      );
  };

  return (
    <section id="contact" className="bg-red-900 text-white py-12 px-6">
      <motion.h2
        className="text-3xl font-bold text-center text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {/* Contact Info */}
        <motion.div
          className="bg-black p-6 rounded-lg shadow-l"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-white">
            Get In Touch
          </h3>
          <p className="mb-4">
            Feel free to reach out for any collaboration or inquiries.
          </p>
          <div className="flex items-center gap-3 mb-4">
            <FaEnvelope className="text-red-500 text-xl" />
            <span>ayushmagrawal.76@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <FaPhone className="text-red-500 text-xl" />
            <span>+91 76669-72175</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-red-500 text-xl" />
            <span>Pune, Maharashtra</span>
          </div>
        </motion.div>
        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-black p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl font-bold text-center text-white mb-6">
            Drop a message
          </h1>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-400 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-400 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-400 text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-600 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {message && (
            <p className="text-center mt-4 text-green-400">{message}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
