

import React from 'react';
import './formcheckout.css';

const Formcheckout = ({ dataForm, handleChangeInput, sendOrder }) => {
  return (
    <form className="checkout-form" onSubmit={sendOrder}>
      <h2 className="checkout-title">Finalizar Compra</h2>
      
      <div className="form-group">
        <label htmlFor="fullname">Nombre completo</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={dataForm.fullname}
          onChange={handleChangeInput}
          placeholder="Ingrese su nombre"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Teléfono</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={dataForm.phone}
          onChange={handleChangeInput}
          placeholder="Ingrese su teléfono"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={dataForm.email}
          onChange={handleChangeInput}
          placeholder="Ingrese su email"
          required
        />
      </div>

      <button type="submit" className="submit-order-btn">
        Enviar Orden
      </button>
    </form>
  );
};

export default Formcheckout; 