
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ product }) => {
  return (
    <li className="item">
      <div className="img-item-container">
        <img className="img-item" src={product.image} alt={product.name} />
      </div>
      <div className="text-item">
        <p className="name-item">{product.name}</p>
        <p className="description-item">{product.description}</p>
        <p className="price-item">${product.price}</p>
        <Link to={"/detail/" + product.id} className="button-item">
          MÁS INFO
        </Link>
      </div>
    </li>
  );
};

export default Item;