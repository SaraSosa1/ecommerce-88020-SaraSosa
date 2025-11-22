import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  const [viewItemCount, setViewItemCount] = useState(true);

  const addToCart = (count) => {
    setViewItemCount(false);
    const newProduct = { ...product, quantity: count };
    addProduct(newProduct);
  };

  return (
    <div className="item-detail">
      <div className="item-detail-image-content">
        <img src={product.image} className="item-detail-image" alt="" />
      </div>

      <div className="item-detail-text-content">
        <p className="item-detail-text">{product.name}</p>
        <p className="item-detail-text-description">{product.description}</p>
        <p className="item-detail-text">${product.price}</p>
        {viewItemCount ? (
          <ItemCount stock={product.stock} addToCart={addToCart} />
        ) : (
          <Link to="/cart" className="go-to-cart-btn">
            Ir al carrito
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;