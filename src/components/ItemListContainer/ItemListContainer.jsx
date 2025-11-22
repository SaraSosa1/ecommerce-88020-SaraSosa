import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import "./itemlistcontainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  const getProducts = async (category) => {
    setLoading(true);
    try {
      const productsRef = collection(db, "products");
      
    
      const q = category 
        ? query(productsRef, where("category", "==", category))
        : productsRef;
      
      const dataDb = await getDocs(q);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts(category);
  }, [category]);


  const getTitle = () => {
    if (!category) {
      return greeting;
    }
    
    return category.charAt(0).toUpperCase() + category.slice(1);
  };
  
  return (
    <div className="itemlistcontainer">
      <h2>{getTitle()}</h2>
      {loading ? <Loading /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;