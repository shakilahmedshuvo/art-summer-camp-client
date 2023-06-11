import { useEffect, useState } from "react";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
    // fetch the data for setClasses
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://art-summer-camp-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
    }, [])
    return (
        <div
            className="max-w-7xl mx-auto mt-28 mb-8">
            <h2
                className="text-center text-5xl my-5 font-extrabold">
                Our Popular Classes
            </h2>
            <p
                className="text-center text-xl my-4 font-bold">
                Meet Our Popular Classes
            </p>
            {/* map and single card section */}
            <div
                className="grid md:grid-cols-3 gap-3">
                {
                    classes.map(singleClasses => <PopularClassesCard
                        key={singleClasses.id}
                        singleClasses={singleClasses}
                    ></PopularClassesCard>)
                }
            </div>
        </div >
    );
};

export default PopularClasses;