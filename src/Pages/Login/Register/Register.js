import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const navigateRegister = () => {
    navigate("/login");
  };
  if (user) {
    navigate('/home')
  }
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="register-form">
      <h2 style={{ textAlign: "center" }}>Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your Name" required />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
          required
        />
        <input type="submit" value="Register" />
      </form>
      <p>
        All Ready have a Account?{" "}
        <Link
          to="/login"
          className="text-danger text-decoration-none"
          onClick={navigateRegister}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
