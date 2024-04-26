import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl font-bold">
          Eco Craft
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center gap-3">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-primary font-bold" : "")}>
            Home
          </NavLink>
          <NavLink to="/all-art-and-craft-items" className={({ isActive }) => (isActive ? " text-primary font-bold" : "")}>
            All Art & Craft Items
          </NavLink>
          <NavLink to="/add-craft-item" className={({ isActive }) => (isActive ? " text-primary font-bold" : "")}>
            Add Craft Item
          </NavLink>
          <NavLink to="/my-art-and-craft-list" className={({ isActive }) => (isActive ? " text-primary font-bold" : "")}>
            My Art & Craft List
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <Link to="/login" className="btn">
          Login
        </Link>
        <Link to="/register" className="btn">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
