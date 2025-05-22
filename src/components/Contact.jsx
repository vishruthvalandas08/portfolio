// src/components/Contact.jsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_mtti98t',      // e.g. 'service_xxx'
        'template_x2qgleg',     // e.g. 'template_yyy'
        formRef.current,
        'vnW2hdvNRN__P_SCv'       // e.g. 'user_zzz'
      );
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Oops, something went wrong. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Contact</h2>
      </motion.div>

      <motion.form
        ref={formRef}
        id="contact"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="mt-8 max-w-xl mx-auto bg-blue-900 p-8 rounded-2xl shadow-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-white mb-2">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md bg-blue-800 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-md bg-blue-800 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-white mb-2">Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Your message..."
            className="w-full px-4 py-2 rounded-md bg-blue-800 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-2 bg-fuchsia-500 hover:bg-fuchsia-600 text-white rounded-md disabled:opacity-50"
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </motion.form>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
