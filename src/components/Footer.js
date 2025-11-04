import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} - Projeto de Pós-Graduação - Roberto
          Carlos Dias de Lucena Farias
        </p>
      </div>
    </footer>
  );
};

export default Footer;
