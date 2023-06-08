import { useLoaderData } from "react-router-dom";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
    const loaderData = useLoaderData();
    return (
        <div className="mt-24 max-w-7xl mx-auto ">
            <h2
                className="text-center text-5xl my-5 font-extrabold">
                Our Instructors
            </h2>
            <p
                className="text-center text-xl my-3 font-bold">
                Meet Our Instructors
            </p>
            <p
                className="text-center text-base my-5 font-semibold">
                Explore creativity, learn new techniques, and have fun!
                Join us for a memorable
                <br />
                summer filled with painting, sculpting, and more.
            </p>
            {/* card map section */}
            <div
                className="grid md:grid-cols-3 gap-3">
                {
                    loaderData.map(data => <InstructorCard
                        key={data.id}
                        data={data}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructor;