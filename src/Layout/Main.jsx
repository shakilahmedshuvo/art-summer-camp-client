import { Outlet } from "react-router-dom";
import Banner from "../Components/Home/Header/Banner";
import NavBar from "../Components/Home/Header/NavBar";
import Footer from "../Components/Home/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;