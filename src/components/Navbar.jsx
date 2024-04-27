import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // Theme Switcher
  const [theme, setTheme] = useState("light");

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
            <NavLink to="/add-craft-item" className={({ isActive }) => (isActive ? " text-primary font-bold py-1" : "py-1")}>
              Add Craft Item
            </NavLink>
            <NavLink to="/my-art-and-craft-list" className={({ isActive }) => (isActive ? " text-primary font-bold py-1" : "py-1")}>
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
      <div className="navbar-end gap-3">
        <Link to="/login" className="btn px-8 py-3 font-semibold rounded-none bg-primary text-white">
          Login
        </Link>
        <Link to="/register" className="btn px-8 py-3 font-semibold rounded-none bg-primary text-white">
          Register
        </Link>
        <input onChange={handleTheme} type="checkbox" className="toggle theme-controller" />
      </div>
    </div>
  );
};

export default Navbar;
