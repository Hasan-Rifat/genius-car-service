import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const navigateRegister = () => {
    navigate("/login");
  };
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
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
