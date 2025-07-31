import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center text-white py-4">
      <p>&copy; {new Date().getFullYear()} Branton Kieti. All rights reserved.</p>
    </footer>
  );
};

export default Footer;