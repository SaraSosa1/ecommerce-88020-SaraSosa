import Item from "../Item/Item"

const ItemList = ({products}) => {
  return (
    <div>
         {
      products.map( (product) => (
      <Item product= {product} key={product._id}/>
      )
    )
    }
      
    </div>
  )
}

export default ItemList
