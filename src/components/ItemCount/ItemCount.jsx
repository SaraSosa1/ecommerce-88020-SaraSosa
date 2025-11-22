
import { useState } from 'react';
import './itemcount.css';

const ItemCount = ({ stock, addToCart }) => {
  const [count, setCount] = useState(1);

  const handleClickRestar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickSumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="itemcount-container">
      <div className="counter">
        <button className="counter-btn" onClick={handleClickRestar}>
          -
        </button>
        <p className="counter-number">{count}</p>
        <button className="counter-btn" onClick={handleClickSumar}>
          +
        </button>
      </div>

      <button className="add-to-cart-btn" onClick={() => addToCart(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;