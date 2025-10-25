
const Item = ({product}) => {
  return (
    <li className="item">
      <div>
      <img className="img-item" src={product.image} alt="" />
      </div>
      <div className="text-item">
    
        <p className="title-item"> {product.title}</p>
        <p className="price-item"> precio: {product.price}</p>
        <p className="button-item">MAS INFO</p>
      </div>
      </li>
  )
}

export default Item
