import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li className="m-2">Home</li>
      </Link>

      <Link to="/lowyerlist">
        <li className="m-2">Booking</li>
      </Link>
      <Link to="/about">
        <li className="m-2">About</li>
      </Link>
      <Link to="/ErrorPage">
        <li className="m-2">Error</li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm mx-auto mx-2 lg:mx-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img src={'https://i.ibb.co.com/NdF5pjqn/logo.png'} alt="" />
        <a className="text-xl text-[#0F0F0F] font-extrabold" href="">
          Law.BD
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-green-600 text-white rounded-2xl">Contact Now</a>
      </div>
    </div>
  );
};

export default Navbar;
