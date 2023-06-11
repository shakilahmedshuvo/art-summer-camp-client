const PopularClassesCard = ({ singleClasses }) => {
    const { name, studentNumber, img, info, id, instructor, price } = singleClasses;

    // handleSelect function
    // const handleSelect = classes => {
    //     console.log(classes);
    //     const seletedClasses = {}
    // }

    return (
        <div>
            <div
                className="card w-96 glass font-bold text-center">
                <figure>
                    <img
                        src={img}
                        alt="" />
                </figure>
                <div
                    className="card-body text-center mx-auto border-s-2  border-gray-300">
                    <h2
                        className="card-title mx-auto font-extrabold text-2xl">
                        Class Name
                        <br />
                        {name}
                    </h2>
                    <p
                        className="font-bold text-lg">
                        Instructor Name: {instructor}
                    </p>
                    <p
                        className="font-bold py-1 text-lg">
                        This Class Price: <span
                            className="font-extrabold"
                        >{price}$</span>
                    </p>
                    <p
                        className="font-bold text-lg border-b-2 border-gray-300 pb-2">
                        About This Class:
                    </p>
                    <p
                        className="text-slate-600 text-sm">
                        {info}
                    </p>
                    <p
                        className="font-bold text-sm">
                        Total Student Number: {studentNumber}
                    </p>
                    <div
                        className="card-actions">
                        <button
                            // onClick="handleSelect"
                            className="btn font-bold btn-wide my-4 mx-auto bg-gradient-to-r from-blue-300 from-10% via-sky-300 via-30% to-indigo-300 to-90% text-black">
                            Select  The Class
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PopularClassesCard;