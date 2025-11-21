
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import carrito from "../../assets/img/carrito.png";
import { Link } from "react-router-dom";
import "./cartwidget.css";


const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const quantity = totalQuantity();

  return (
    <Link to="/cart" className="cart-widget">
      <img src={carrito} alt="Carrito de compras" className="cart-icon"/>
      <p> {quantity !== 0 && quantity } </p>
    </Link>
  )
}

export default CartWidget
