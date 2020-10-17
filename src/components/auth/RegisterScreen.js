import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const {msgError} = useSelector( (state) => state.ui);

  console.log(msgError);

  const [formValues, handleInputChange] = useForm({
    name: "MatiasSalicru",
    email: "mattiassalicru@gmail.com",
    password1: 123456,
    password2: 123456,
  });

  const { name, email, password1, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      console.log("formulario correcto");
      dispatch(  startRegisterWithEmailPasswordName(email, password1.toString(), name) )
      
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {

      dispatch(setError("Name is required"));
      return false;

    } else if (!validator.isEmail(email)) {

      dispatch(setError("Email is invalid"));
      return false;

    } else if (password1 !== password2 || password1.length < 5) {

      dispatch(
        setError("Password must 5 at least 5 characters and Match each other")
      );
      return false;

    } else {

      dispatch(removeError());
      return true;

    }
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleRegister}>
        {
          msgError 
          ? <div className="auth__alert-error">{msgError}</div> 
          : null
        }

        <input
          className="auth__input"
          type="text"
          placeholder="Username..."
          name="name"
          autoComplete="off"
          onChange={handleInputChange}
          value={name}
        />

        <input
          className="auth__input"
          type="text"
          placeholder="Email..."
          name="email"
          autoComplete="off"
          onChange={handleInputChange}
          value={email}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="password..."
          name="password1"
          autoComplete="new-password"
          onChange={handleInputChange}
          value={password1}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password..."
          autoComplete="new-password"
          name="password2"
          onChange={handleInputChange}
          value={password2}
        />

        <button className="btn btn-primary btn-block mb-5" type="submit">
          Registrarse
        </button>

        <Link to="/auth/login" className="link mt-5">
          Already Register
        </Link>
      </form>
    </>
  );
};
