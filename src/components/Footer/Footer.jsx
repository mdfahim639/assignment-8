import React from 'react';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';
import { Link, Links } from 'react-router';

const links = (
  <>
    <Link to="/">
      <li className="m-2">Home</li>
    </Link>
    <Link to="/about">
      <li className="m-2">About</li>
    </Link>
    <Link to="/ErrorPage">
      <li className="m-2">Error</li>
    </Link>
  </>
);

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-black text-base-content rounded p-10">
      <div className="flex items-center gap-2">
        <img src={'https://i.ibb.co.com/NdF5pjqn/logo.png'} alt="" />
        <a className="text-xl text-[#ffff] font-extrabold" href="">
          Law.BD
        </a>
      </div>
      <nav>
        <ul className="menu menu-horizontal px-1 text-white">{links}</ul>
      </nav>

      <nav className="flex gap-4">
        <a href="https://www.facebook.com/your.username">
          <FaSquareFacebook size={30} color="#1877F2" />
        </a>
        <a href="https://github.com/mdfahim639">
          <FaGithub size={30} color="#ffff" />
        </a>
        <a href="">
          <IoLogoYoutube size={30} color="#FF0000" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
