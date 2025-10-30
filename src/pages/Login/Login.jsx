import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
        <p className="text-center pt-10 text-2xl font-semibold text-accent">
          Login to Your Account
        </p>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
