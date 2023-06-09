const PopularClassesCard = ({ singleClasses }) => {
    const { name, studentNumber, img, info } = singleClasses;
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
                    className="card-body text-center mx-auto">
                    <h2
                        className="card-title mx-auto font-extrabold text-2xl my-2">
                        Class Name: {name}
                    </h2>
                    <p
                        className="font-bold text-lg">
                        Total Student Number: {studentNumber}
                    </p>
                    <p
                        className="font-bold text-xl">
                        About This Class:
                    </p>
                    <p
                        className="text-slate-600">
                        {info}
                    </p>
                    <div
                        className="card-actions ">
                        <button
                            className="btn font-bold btn-wide my-2 mx-auto bg-gradient-to-r from-blue-300 from-10% via-sky-300 via-30% to-indigo-300 to-90% text-white">
                            See More!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularClassesCard;