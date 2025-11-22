import { useState } from "react";
import logo from "../../assets/img/marti.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" onClick={closeMenu}>
        <img src={logo} className="logo" alt="logo" />
      </Link>


      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu} aria-label="menu button">
        <span></span>
        <span></span>
        <span></span>
      </div>

      
      <ul className={`categorias ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/category/macarons" onClick={closeMenu}>Macarrons</Link>
        </li>
        <li>
          <Link to="/category/cookies" onClick={closeMenu}>Cookies</Link>
        </li>
        <li>
          <Link to="/category/tortas" onClick={closeMenu}>Tortas</Link>
        </li>

        <li className="auth-link">
          <Link to="/login" onClick={closeMenu}>Login</Link>
        </li>
        <li className="auth-link">
          <Link to="/register" onClick={closeMenu}>Register</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
