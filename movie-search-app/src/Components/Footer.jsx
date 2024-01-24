import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./footer.css"
const Footer = ({ theme }) => {
  return (
    <footer className={theme === 'dark' ? 'dark-footer' : 'light-footer'}>
      <div className="bottom-footer">
        <p>&copy; {new Date().getFullYear()} Movie App.</p>
        <p>Version 1.0.0</p>
      </div>
    </footer>
  );
};

export default Footer;
