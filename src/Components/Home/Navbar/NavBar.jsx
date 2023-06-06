import { Link } from "react-router-dom";

const NavBar = () => {
    const navBarItems =
        <>
            <li className="text-lg">
                <Link
                    to="/">
                    Home
                </Link>
            </li>
            <li className="text-lg">
                <Link to="">
                    Classes
                </Link>
            </li>
            <li className="text-lg">
                <Link to="">
                    Instructors
                </Link>
            </li>
            <li className="text-lg">
                <Link to="">
                    Dashboard
                </Link>
            </li>
        </>
    return (
        <div className="font-bold overflow-hidden
         bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="navbar mx-auto  max-w-7xl text-white">
                <div className="navbar-start">
                    <img
                        className="w-[8%] rounded-full mr-3"
                        src="https://img.freepik.com/premium-vector/emblem-art-gallery_658131-1.jpg?w=740"
                        alt="" />
                    <a
                        className="btn btn-ghost normal-case text-xl font-bold">
                        ART SUMMER CAMP
                    </a>
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            {navBarItems}
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="btn btn-ghost normal-case text-xl">
                        <img
                            src=""
                            alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul
                        className="menu menu-horizontal px-1">
                        {navBarItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;