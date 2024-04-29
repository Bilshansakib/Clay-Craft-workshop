import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import { useEffect, useState } from "react";

const NavBar = () => {
  const { user, logOut } = useAuth() || {};

  const [theme, setTheme] = useState("nord");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("nord");
    }
  };
  // console.log(user);
  const handleSignOut = () => {
    logOut()
      .then((result) => console.log(result))
      .then((error) => console.error(error));
  };
  const Links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allArtAndCraftItem">All Art & craft Items</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/addCraftItem">Add Craft Item</NavLink>
          </li>
          <li>
            <NavLink to="/myArtAndCraftList">My Art & Craft List</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">login</NavLink>
          </li>
          <li>
            <NavLink to="/register">register</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-white h-28">
      <div className="navbar-start">
        <div className="dropdown p-5">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Links}
          </ul>
        </div>
        <div className="flex items-center">
          <input
            onChange={handleToggle}
            type="checkbox"
            className="toggle bg-orange-300 toggle-medium"
          />

          <a className="btn btn-ghost text-2xl hot">Clay'Craft | WorkShop </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <>
            <div className="dropdown dropdown-end p-10">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/rMb1Tvd/ben-kolde-bs2-Ba7t69m-M-unsplash.jpg"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user?.displayName || "user name not found"}
                  </button>
                </li>
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user && user.email}
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-sm  btn-ghost"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="p-10">
              <Link to="/login">
                <button className="btn btn-circle text-xs ">Login</button>
              </Link>
              /
              <Link to="/register">
                <button className="btn btn-link text-lg ">Sign Up</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
