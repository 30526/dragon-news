import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast("Log Out Successfully!");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <nav className="flex justify-between items-center my-10 grid grid-cols-12 gap-10">
      <nav className="col-span-3"></nav>
      <nav className="nav col-span-6 flex gap-5 text-accent justify-center">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"about"}>About</NavLink>
        <NavLink to={"/carrier"}>Carrier</NavLink>
      </nav>
      <nav className="flex gap-3 items-center col-span-3 justify-end">
        <img
          className="rounded-full w-10"
          src={user ? user.photoURL : userIcon}
          alt=""
        />
        {user ? (
          <Link
            to={"/"}
            onClick={handleSignOut}
            className="btn btn-primary px-10"
          >
            Log Out
          </Link>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </nav>
    </nav>
  );
};

export default Navbar;
