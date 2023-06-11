import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Utilities/Providers/AuthProvider";
import { useContext } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const PopularClassesCard = ({ singleClasses }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { name,
        id,
        studentNumber,
        img,
        info,
        instructor,
        price,
        seats
    } = singleClasses;

    // handleSelect function
    const handleSelect = item => {
        // console.log(item);
        if (user && user.email) {
            const itemSelected = { selectItemId: id, name, img, price, email: user.email };
            fetch('http://localhost:5000/selectClass', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(itemSelected)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your Class Was Selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to Select The Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now & Select The Class'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {
                        state: { from: location }
                    })
                }
            })
        }
    }

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
                    <p
                        className="font-bold text-sm">
                        Available seats: {seats}
                    </p>
                    <div
                        className="card-actions">
                        <button
                            onClick={handleSelect}
                            className="btn font-bold btn-wide my-4 mx-auto bg-gradient-to-r from-blue-300 from-10% via-sky-300 via-30% to-indigo-300 to-90% text-black">
                            <FaAngleDoubleRight />Select The Class
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PopularClassesCard;