import logo from "../../assets/img/marti.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./navbar.css"


const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" >
      <img src={logo} className="logo" alt="" />
      </Link>
      <ul className="categorias">
        <li>
          <Link to="/category/macarons">Macarrons</Link>
        </li>
        <li>
          <Link to="/category/cookies">Cookies</Link>
        </li>
        <li>
          <Link to="/category/tortas">Tortas</Link>
        </li>
        
      </ul>
      <CartWidget />
    </nav>

   

  )
}

export default NavBar;
