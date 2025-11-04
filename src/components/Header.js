import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-content">
        <Link to="/" className="logo">
          Jamstack Gatsby
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
