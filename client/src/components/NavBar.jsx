import { FaGithub } from 'react-icons/fa6';
import { AiFillVideoCamera } from 'react-icons/ai';
const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl flex items-center">
          <AiFillVideoCamera className="mr-2" />
          RTC-Chat
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/srijonp4/">
                <FaGithub className="mr-2" />
                Github
              </a>
            </li>
            <li>
              <details>
                <summary>Versions</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a href="/">Scratch</a>
                  </li>
                  <li>
                    <a href="/">Library</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <ul className="menu menu-horizontal p-0 hidden lg:flex">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Privacy Policy</a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/srijonp4/">
              <FaGithub className="mr-2" />
              Github
            </a>
          </li>
          <li>
            <details>
              <summary>Versions</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a href="/">Scratch</a>
                </li>
                <li>
                  <a href="/">Library</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
