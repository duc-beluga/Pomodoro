import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout, user } = useAuth();

  console.log(isLoggedIn);
  return (
    <div className="absolute bg-transparent top-0 z-10 navbar bg-base-100">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" to="/">
          POMODORO
        </Link>
      </div>
      <div className="navbar-end">
        {!isLoggedIn ? (
          <Link className="btn" to="/signup">
            Sign Up
          </Link>
        ) : (
          <Link className="btn bg-transparent text-white" onClick={logout}>
            Sign out
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
