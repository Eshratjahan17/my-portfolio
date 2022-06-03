import React from 'react';
import github from '../../icons/github.svg';
import linkedin from '../../icons/linkedin.png';
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
                <a className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    class="fill-primary bg-white  rounded-full p-2"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    class="fill-primary bg-white  rounded-full p-2"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a>
                  <img src={linkedin} alt="" />
                </a>
              </li>
              <li>
                <a>
                  <img src={github} alt="" />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;