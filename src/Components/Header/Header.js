import { Link } from "react-router-dom";
import './Header.css';


const Header = () => {
  return (
    <div className="nav">
      <div class="navbar bg-primary ">
        <div class="navbar-start">
          <div class="dropdown ">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li tabindex="0">
                <a href="#featuredProjects" class="justify-between">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <a href="/" class="btn btn-ghost normal-case text-xl">
            Eshrat Jahan
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li tabindex="0">
              <a href="#featuredProjects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <a
            target="_blank"
            class="btn glass bg-primary text-white outline"
            href="https://drive.google.com/file/d/1jif1ZCzCABcPZy-bLu_pXDcvNgELMsmG/view?usp=sharing"
            rel="noreferrer"
            download
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;