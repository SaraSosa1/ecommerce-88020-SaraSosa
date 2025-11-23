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
      alert(error.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmitForm}>
        <h2 className="auth-title">Iniciar Sesión</h2>

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
          Iniciar Sesión
        </button>

        <p className="auth-link-text">
          ¿Eres nuevo? <Link to="/register">Regístrate aquí</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
