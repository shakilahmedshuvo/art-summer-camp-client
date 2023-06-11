
const InstructorCard = ({ data }) => {
    const { name, email, img } = data;
    return (
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
                    Name: {name}
                </h2>
                <p>
                    Email: {email}
                </p>
                <div
                    className="card-actions ">
                    <button
                        className="btn font-bold btn-wide my-4 mx-auto bg-gradient-to-r from-blue-300 from-10% via-sky-300 via-30% to-indigo-300 to-90% text-black">
                        See More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;