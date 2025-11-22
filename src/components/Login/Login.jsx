import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

const Login = () => {
  const [dataForm, setDataForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const auth = getAuth();

  const handleChangeInput = (e) =>
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        dataForm.email,
        dataForm.password
      );
      if (!userCredential.user.emailVerified) {
        auth.signOut();
        throw new Error("El correo no fue verificado!");
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <form className="form-login" onSubmit={handleSubmitForm}>
        <h2>Iniciar Sesión</h2>

        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input
            className="input"
            placeholder="Ingrese su email"
            type="email"
            id="email"
            name="email"
            value={dataForm.email}
            onChange={handleChangeInput}
            required
          />
        </div>

        <div className="input-box">
          <label htmlFor="password">Contraseña</label>
          <input
            className="input"
            placeholder="Ingrese su contraseña"
            type="password"
            id="password"
            name="password"
            value={dataForm.password}
            onChange={handleChangeInput}
            required
          />
        </div>

        <button className="submit" type="submit">
          INICIAR SESIÓN
        </button>

        <div className="button-to-register">
          <p>¿Eres nuevo?</p>
          <Link className="link" to="/register">
            Regístrate aquí!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
