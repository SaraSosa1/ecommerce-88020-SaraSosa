import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore"; 
import db from "../../db/db.js";

const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getProducts = async () => {
    setLoading(true);
    try {
      const productRef = doc(db, "products", id);
      const dataDb = await getDoc(productRef);
      const data = { id: dataDb.id, ...dataDb.data() };
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <div>
      {loading ? <Loading /> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;