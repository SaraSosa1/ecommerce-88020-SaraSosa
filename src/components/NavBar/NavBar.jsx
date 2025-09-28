import logo from "../../assets/img/marti.png";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css"


const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="logo" alt="" />

      <ul className="categorias">
        <li>Macarrons</li>
        <li>Cookies</li>
        <li>Tortas</li>
        
      </ul>
      <CartWidget />
    </nav>

   

  )
}

export default NavBar;
