import React, { use, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser } = use(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Login Successful!");
        event.target.reset();
        navigate(`${location?.state ? location.state : "/"}`);
      })
      .catch((error) => setError(error.code));
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
        <p className="text-center pt-10 text-2xl font-semibold text-accent">
          Login to Your Account
        </p>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                required
                placeholder="Password"
              />
              {error && <p className="text-red-500 text-xs">{error}</p>}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              <p className="text-center pt-5">
                Don't Have an Account?{" "}
                <Link
                  to={"/auth/register"}
                  className="text-secondary font-semibold"
                >
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
