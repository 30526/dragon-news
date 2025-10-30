import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";

import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthContext";
const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 character");
      return;
    }
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => console.log(error));
        event.target.reset();
        toast.success("Successfully Registered!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
        <p className="text-center pt-10 text-2xl font-semibold text-accent">
          Register Your Account
        </p>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Your Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Enter your name"
                required
              />
              {nameError && <p className="text-xs text-error">{nameError}</p>}
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="url"
                className="input"
                placeholder="Enter your URL"
                required
              />
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
                placeholder="Password"
                required
              />
              <div>
                <label className="label mt-2">
                  <input type="checkbox" required className="checkbox" />
                  Accept{" "}
                  <span className="font-medium text-primary">
                    Terms and Conditions
                  </span>
                </label>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
