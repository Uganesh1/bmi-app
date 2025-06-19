import React from 'react';
import './Footer.css'; // or use a CSS Module if preferred

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Uganesh All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
