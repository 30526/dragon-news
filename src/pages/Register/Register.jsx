import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
        <p className="text-center pt-10 text-2xl font-semibold text-accent">
          Register Your Account
        </p>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input
              type="name"
              className="input"
              placeholder="Enter your name"
            />
            <label className="label">Photo URL</label>
            <input type="url" className="input" placeholder="Enter your URL" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <label className="label mt-2">
                <input type="checkbox" defaultChecked className="checkbox" />
                Accept <span className="font-medium text-primary">Terms and Conditions</span>
              </label>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-center pt-5">
             Already Have an Account?{" "}
              <Link
                to={"/auth/login"}
                className="text-secondary font-semibold"
              >
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
