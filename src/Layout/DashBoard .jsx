import { NavLink, Outlet } from "react-router-dom";
import { FaUserShield, FaHome, FaIdCard, FaRegSave, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const DashBoard = () => {
    const isAdmin = true;
    return (
        <div
            className="drawer lg:drawer-open max-w-7xl mx-auto bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-pink-200 to-90% text-black font-bold">
            <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle" />
            <div
                className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden">
                    Open DashBoard
                </label>
            </div>
            <div
                className="drawer-side bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white font-bold">
                <label
                    htmlFor="my-drawer-2"
                    className="drawer-overlay">
                </label>
                <ul className="menu p-4 w-80">
                    {/*  admin and user */}
                    {
                        isAdmin ?
                            <>
                                {/* admin panel section start only admin access this section */}
                                <li>
                                    <NavLink
                                        to='/dashboard/manageClasses'
                                        className="bg-transparent">
                                        <FaChalkboardTeacher /> Admin Manage Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/manageUsers'
                                        className="bg-transparent">
                                        <FaUserShield />  Admin Manage Users
                                    </NavLink>
                                </li>
                                {/* admin panel section end */}
                            </>
                            :
                            <>
                                {/* user panel section start */}
                                <li>
                                    <NavLink
                                        to='/dashboard/paidClasses'
                                        className="bg-transparent">
                                        <FaRegSave /> Your Selected Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/userPayment'
                                        className="bg-transparent">
                                        <RiMoneyDollarCircleFill /> Your Payments & Payments History
                                    </NavLink>
                                </li>
                                {/* user panel section end */}
                            </>
                    }

                    {/* divider start */}
                    <div
                        className="divider">
                    </div>
                    {/* this is for all user and admin */}
                    <li>
                        <NavLink
                            to="/">
                            <FaHome />Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/popularClasses">
                            <FaIdCard />Our Classes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/instructor">
                            <FaUserGraduate /> Our Instructors
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default DashBoard;