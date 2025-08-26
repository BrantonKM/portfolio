// src/components/Contact.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setStatus('✅ Message sent!');
        setForm({ user_name: '', user_email: '', message: '' });
      } else {
        setStatus('❌ Something went wrong, please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('❌ Failed to send message');
    }
  };

  return (
    <section id="contact" className="bg-gray-900 py-20 px-6 text-white">
      <h2 className="text-3xl font-bold text-center text-cyan-400">
        Get In Touch
      </h2>
      <form
        onSubmit={onSubmit}
        className="max-w-xl mx-auto mt-10 space-y-6"
      >
        <input
          name="user_name"
          value={form.user_name}
          onChange={onChange}
          placeholder="Your Name"
          className="w-full p-3 bg-gray-800 rounded text-white"
          required
        />
        <input
          type="email"
          name="user_email"
          value={form.user_email}
          onChange={onChange}
          placeholder="Your Email"
          className="w-full p-3 bg-gray-800 rounded text-white"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 bg-gray-800 rounded text-white"
          required
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded transition"
        >
          Send
        </button>
        <p className="mt-2 text-sm">{status}</p>
      </form>
    </section>
  );
}
