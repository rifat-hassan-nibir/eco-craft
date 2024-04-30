import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import { RiUser3Line } from "react-icons/ri";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  // Theme Switcher
  const [theme, setTheme] = useState("light");

  // Theme Changer
  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  // Logout User

  return (
    <div className="navbar bg-base-100 py-[30px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[20] p-4 shadow bg-base-100 rounded-box w-52 dark:text-white">
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-primary font-bold py-1" : "py-1 dark:text-white")}>
              Home
            </NavLink>
            <NavLink to="/all-art-and-craft-items" className={({ isActive }) => (isActive ? "text-primary font-bold py-1" : "py-1")}>
              All Art & Craft Items
            </NavLink>
            <NavLink to="/add-craft-item" className={({ isActive }) => (isActive ? "text-primary font-bold py-1" : "py-1")}>
              Add Craft Item
            </NavLink>
            <NavLink to="/my-art-and-craft-list" className={({ isActive }) => (isActive ? "text-primary font-bold py-1" : "py-1")}>
              My Art & Craft List
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="text-xl font-bold">
          Eco Craft
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center gap-5">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-primary font-bold underline" : "dark:text-white")}>
            Home
          </NavLink>
          <NavLink
            to="/all-art-and-craft-items"
            className={({ isActive }) => (isActive ? "text-primary font-bold underline" : "dark:text-white")}
          >
            All Art & Craft Items
          </NavLink>
          <NavLink to="/add-craft-item" className={({ isActive }) => (isActive ? "text-primary font-bold underline" : "dark:text-white")}>
            Add Craft Item
          </NavLink>
          <NavLink
            to="/my-art-and-craft-list"
            className={({ isActive }) => (isActive ? "text-primary font-bold underline" : "dark:text-white")}
          >
            My Art & Craft List
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <input onChange={handleTheme} type="checkbox" className="toggle theme-controller" />
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <img src={user.photoURL} id="user-anchor-element" className=" border-2 border-primary size-10 rounded-full w-full" />
              <Tooltip anchorSelect="#user-anchor-element" content={user.displayName} />
            </div>
            <ul tabIndex={0} className="dropdown-content z-[20] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <button onClick={logoutUser}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div id="no-user-anchor" className="dropdown dropdown-end">
              <Tooltip anchorSelect="#no-user-anchor" content="Login or Register" />
              <div tabIndex={0} role="button">
                <RiUser3Line className="size-6" />
              </div>
              <ul tabIndex={0} className="dropdown-content z-[20] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
