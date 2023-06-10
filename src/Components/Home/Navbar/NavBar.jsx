import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { FaHome, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import { BsFileText } from "react-icons/bs";

const NavBar = () => {
    const { user, logOut } = useAuth();

    // handleLogOut function
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error));
    }

    // nav item 
    const navBarItems =
        <>
            <li className="text-lg">
                <Link
                    to="/">
                    <FaHome /> Home
                </Link>
            </li>
            <li className="text-lg">
                <Link
                    to="/popularClasses">
                    <FaChalkboardTeacher />Classes
                </Link>
            </li>
            <li className="text-lg">
                <Link to="instructor">
                    <FaUserGraduate />Instructors
                </Link>
            </li>
            <li className="text-lg">
                <Link to="dashboard">
                    <BsFileText />Dashboard
                </Link>
            </li>
            {/* conditional rendering */}
            {
                user ?
                    <>
                        {/* tooltip show and the profile picture */}
                        <div
                            className="tooltip tooltip-warning tooltip-bottom flex justify-center items-center font-bold"
                            data-tip={user.displayName}>
                            <img
                                className="w-12 h-12 rounded-full"
                                src=
                                {
                                    user?.photoURL
                                }
                                alt="" />
                        </div>
                        <li className="text-lg">
                            <Link
                                onClick={handleLogOut}
                                className="btn-ghost">
                                Log Out <FiLogOut
                                    className="text-2xl text-slate-200">
                                </FiLogOut>
                            </Link>
                        </li>
                    </>
                    :
                    <>
                        <li className="text-lg">
                            <Link
                                className="btn-ghost"
                                to="login">
                                Log In <FiLogIn
                                    className="text-2xl text-slate-200">
                                </FiLogIn>
                            </Link>
                        </li>
                    </>
            }
        </>
    return (
        <div className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-10 fixed">
            <div className="navbar mx-auto text-white">
                <div className="navbar-start ">
                    <img
                        className="w-[8%] rounded-full mr-3"
                        src="https://img.freepik.com/premium-vector/emblem-art-gallery_658131-1.jpg?w=740"
                        alt="" />
                    <Link
                        to='/'
                        className="btn btn-ghost normal-case text-xl font-bold">
                        ART
                        <br />
                        SUMMER CAMP
                    </Link>
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
                <div className="navbar-end font-bold">
                    <a className="btn border-0 font-extrabold">
                        About Us
                    </a>
                </div>

            </div>
        </div>
    );
};

export default NavBar;