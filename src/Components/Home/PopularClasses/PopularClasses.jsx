import { useEffect, useState } from "react";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
    // fetch the data for setClasses
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
    }, [])
    return (
        <div>
            <h2
                className="text-center text-5xl my-5 font-extrabold">
                popular classes
            </h2>
            {/* map and single card section */}
            {
                classes.map(singleClasses => <PopularClassesCard
                    key={singleClasses.id}
                    singleClasses={singleClasses}
                ></PopularClassesCard>)
            }
        </div >
    );
};

export default PopularClasses;