import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    const isAdmin = false;
    return (
        <div
            className="drawer lg:drawer-open max-w-7xl mx-auto bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-pink-200 to-90% text-white font-bold">
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
                    Open drawer
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
                                        className="bg-transparent">
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="bg-transparent">
                                        Add An Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="bg-transparent">
                                        Manage Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="bg-transparent">
                                        Manage Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="bg-transparent">
                                        All Users & Student's
                                    </NavLink>
                                </li>
                                {/* admin panel section end */}
                            </>
                            :
                            <>
                                {/* user panel section start */}
                                <li>
                                    <NavLink
                                        className="bg-transparent">
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="bg-transparent">
                                        Paid Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="bg-transparent">
                                        Your Payment History
                                    </NavLink>
                                </li>
                                {/* user panel section end */}
                            </>
                    }

                    {/* divider start */}
                    <div
                        className="divider">
                    </div>
                    <li>
                        <NavLink
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/popularClasses">
                            Our Classes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/instructor">
                            Our Instructors
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;