
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../data/fetchApi.js"

const ItemListContainer = ({ greeting }) => {
   const[products, setProducts] = useState([])

   useEffect(()=>{

    getProducts()
    .then((data)=>{
     console.log( "datos recibidos", data);
      setProducts(data.payload)
    })

   }, [])


     console.log(products)

  return (
    <div className="itemListcontainer">
     <h2>{greeting}</h2>
    <ItemList products= {products} />
    </div>
  )
}

export default ItemListContainer