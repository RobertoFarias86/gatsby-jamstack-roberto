import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} - Front-end Jamstack com Gatsby - Roberto
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;