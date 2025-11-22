import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db.js";
import Formcheckout from "../FormCheckout/Formcheckout.jsx";
import "./checkout.css";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: ""
  });
  const [orderId, sendOrderId] = useState(null);
  const { cart, totalPrice } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const sendOrder = (event) => {
    event.preventDefault();

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      total: totalPrice()
    };
    uploadOrder(order);
  };

  const uploadOrder = async (order) => {
    try {
      const orderRef = collection(db, "orders");
      const response = await addDoc(orderRef, order);
      sendOrderId(response.id);
    } catch (error) {
      console.log("Error al subir la orden de compra");
    }
  };

  return (
    <div className="checkout-container">
      {orderId ? (
        <div className="order-success">
          <h2>¡Orden Generada Correctamente!</h2>
          <p>Guarde el identificador de su compra:</p>
          <div className="order-id">{orderId}</div>
          <p className="order-message">
            Nos pondremos en contacto con usted pronto.
          </p>
        </div>
      ) : (
        <Formcheckout
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          sendOrder={sendOrder}
        />
      )}
    </div>
  );
};

export default Checkout;