import InstructorCard from "./InstructorCard";
import { useEffect, useState } from "react";

const Instructor = () => {
    // fetch the data for instructors
    const [data, SetData] = useState([]);
    useEffect(() => {
        fetch('https://art-summer-camp-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                SetData(data)
            })
    }, [])
    return (
        <div className="mt-24 max-w-7xl mx-auto pb-8">
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
                className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 mx-auto">
                {
                    data.map(data => <InstructorCard
                        key={data.id}
                        data={data}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructor;