import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../../Shared/Loading/Loading";
import useToken from "../../../Hooks/useToken";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();
  const navigateRegister = () => {
    navigate("/login");
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    // navigate("/home");
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate("/home");
  }
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
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          htmlFor="terms"
          className={`ps-2 ${!agree ? "text-primary" : "text-danger"}`}
        >
          Accept genius car services terms and Conditions
        </label>
        <input
          className="btn btn-primary w-50 mx-auto d-block mt-2"
          type="submit"
          value="Register"
          disabled={!agree}
        />
      </form>
      <p>
        All Ready have a Account?{" "}
        <Link
          to="/login"
          className="text-primary text-decoration-none"
          onClick={navigateRegister}
        >
          Please Login
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;
