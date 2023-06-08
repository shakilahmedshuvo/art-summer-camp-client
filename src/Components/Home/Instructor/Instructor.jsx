import { useLoaderData } from "react-router-dom";

const Instructor = () => {
    const loaderData = useLoaderData();
    console.log(loaderData);
    return (
        <div className="mt-24">

        </div>
    );
};

export default Instructor;