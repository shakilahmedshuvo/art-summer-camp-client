import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Instructor from "../Instructor/Instructor";
import PopularClasses from "../PopularClasses/PopularClasses";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner />
            <PopularClasses />
            <Instructor />
            <Reviews />
            <Gallery />
        </div>
    );
};

export default Home;