import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { removeError, setError } from "../../actions/ui";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  const { loading } = useSelector((state) => state.ui);

  console.log(loading);

  console.log(msgError);

  const [formValues, handleInputChange] = useForm({
    email: "Matt@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startLoginEmailPassword(email, password));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError("Email inválido"));
      return false;
    } else if (password.length < 4) {
      dispatch(setError("La contraseña tiene que ser de mas de 4 caracteres"));
      return false;
    } else {
      dispatch(removeError());
      return true;
    }
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form onSubmit={handleLogin}>
        {msgError ? <div className="auth__alert-error">{msgError}</div> : null}

        <input
          className="auth__input"
          type="text"
          placeholder="Email..."
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="password..."
          name="password"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />

        <button
          className="btn btn-primary btn-block"
          type="submit"
          disabled={loading}
        >
          Ingresar
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/register" className="link">
          Create new Account
        </Link>
      </form>
    </>
  );
};
