'use client';
import { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <Link className="navbar-brand" href="#">
            Areeba Sheikh
          </Link>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <div className={`pages ${menuOpen ? "active" : ""}`}>
            <Link href="/" className="navbar-link">
              Home
            </Link>
            <Link href="/about" className="navbar-link">
              About
            </Link>
            <Link href="/contact" className="navbar-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
