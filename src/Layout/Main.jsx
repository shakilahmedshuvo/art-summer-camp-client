import { Outlet } from "react-router-dom";
import Footer from "../Components/Home/Footer/Footer";
import NavBar from "../Components/Home/Navbar/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;