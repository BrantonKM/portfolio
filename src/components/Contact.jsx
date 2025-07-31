import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-cyan-400 text-center mb-10">Contact Me</h2>
        <form className="space-y-6">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-800 text-white" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-800 text-white" />
          <textarea placeholder="Your Message" rows="5" className="w-full p-3 rounded bg-gray-800 text-white"></textarea>
          <button type="submit" className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 rounded text-white font-semibold">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;