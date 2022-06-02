import React from 'react';
import Home from '../Home/Home';
import './Header.css';


const Header = () => {
  return (
    <div className="">
      <div class="drawer drawer-mobile ">
        <input id="my-navbar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col  ">
          <Home></Home>
          <label
            for="my-navbar"
            class="btn btn-square  text-white  drawer-button lg:hidden "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="drawer-side bg-primary ">
          <label for="my-navbar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-50 bg-primary  text-base-content ">
            <div className="nav  text-white">
              <li>
                <a class=" normal-case text-2xl" href="#">
                  Eshrat Jahan
                </a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#myprojects">My Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </div>
            <div className="nav-social mt-11  ">
              <li>
               
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#myprojects">My Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;