import { Outlet } from "react-router-dom";
import Footer from "../Components/Home/Footer/Footer";
import NavBar from "../Components/Home/Navbar/NavBar";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <div className="overflow-hidden">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;