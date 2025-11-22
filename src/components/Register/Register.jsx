import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { setDoc, doc, addDoc } from "firebase/firestore";
import db from "../../db/db.js";
import "../Login/Login.css";

const Register = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const auth = getAuth();
  const navegate = useNavigate();

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        dataForm.email,
        dataForm.password
      );
      if (userCredential) throw new Error("Error al crear el usuario");

      await setDoc(doc(db, "users", userCredential.user.uid), {
        username: dataForm.username,
        email: dataForm.email,
        avatar: "default.jpg",
      });

      await sendEmailVerification(userCredential.user);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmitForm}>
        <h2 className="auth-title">Crear Cuenta</h2>

        <div className="form-group">
          <label htmlFor="name">Nombre completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={dataForm.name}
            onChange={handleChangeInput}
            placeholder="Tu nombre"
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
            placeholder="tu@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={dataForm.password}
            onChange={handleChangeInput}
            placeholder="••••••••"
            required
          />
        </div>

        <button type="submit" className="auth-btn">
          Registrarse
        </button>

        <p className="auth-link-text">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
