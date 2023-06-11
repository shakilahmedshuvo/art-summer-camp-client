import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Utilities/Providers/AuthProvider";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const SelectClasses = () => {
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([]);
    // get the total price
    const total = item.reduce((sum, item) => item.price + sum, 0);
    // load the data
    const url = `http://localhost:5000/selectClass?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, [url]);

    // 
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // refetch the data
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div
            className="w-full">
            <div
                className="uppercase font-semibold flex justify-evenly items-center">
                <h3
                    className="text-3xl">
                    Total Items: {item.length}
                </h3>
                <br />
                <h3
                    className="text-3xl">
                    Total Price: ${total}
                </h3>
                <button
                    className="btn btn-sm bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 border-0 text-white">
                    Make Payment
                </button>
            </div>
            {/* table start */}
            <div
                className="overflow-x-auto w-full">
                <table
                    className="table w-full">
                    {/* table head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Classes Photo
                            </th>
                            <th
                                className="text-center">
                                Classes Name
                            </th>
                            <th
                                className="text-center">
                                Classes Price
                            </th>
                            <th
                                className="text-center">
                                Remove The Classes
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            item.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div
                                            className="mask rounded-lg w-12 h-12">
                                            <img
                                                src={item.img}
                                                alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td
                                    className="text-center">
                                    {item.name}
                                </td>
                                <td
                                    className="text-center text-base">
                                    ${item.price}
                                </td>
                                <td
                                    className="text-center">
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="btn btn-ghost text-2xl">
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectClasses;