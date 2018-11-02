import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="hero is-dark">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            <Link to="/">Minimalist Tube</Link>
          </h1>
          <h2 className="subtitle">YouTube without distractions</h2>
        </div>
      </div>
    </section>
  );
};

export default Header;
