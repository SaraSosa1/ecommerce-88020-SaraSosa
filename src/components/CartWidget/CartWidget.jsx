import carrito from "../../assets/img/carrito.png"

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={carrito} alt="Carrito de compras" className="cart-icon"/>
      <p>2</p>
    </div>
  )
}

export default CartWidget
