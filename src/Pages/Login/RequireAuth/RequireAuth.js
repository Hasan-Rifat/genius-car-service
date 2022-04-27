import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);

  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div>
        <h3 className="text-danger">Your Email is not Verified!!</h3>
        <h5 className="text-success">Please Verify Your email Address</h5>
        <button
          className="btn btn-primary"
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          send Verification email agin
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
