
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    // use react tenStackQuery 
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    // handleMakeAdmin eventHandler
    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${user.name} is an Admin Now !`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="w-full">
            <h3 className="text-4xl font-bold text-center my-4">
                Total Users: {users.length}
            </h3>
            <div className="overflow-x-auto">
                {/* table */}
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                User Name
                            </th>
                            <th>
                                User Email
                            </th>
                            <th>
                                Make Admin
                            </th>
                            <th>
                                Make Instructor
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* table data map section */}
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                {/* make admin */}
                                <td
                                    className="text-center">
                                    {
                                        user.role === 'admin'
                                            ?
                                            'Currently Admin'
                                            :
                                            <button
                                                onClick=
                                                {
                                                    () => handleMakeAdmin(user)
                                                }
                                                className="btn btn-ghost text-black text-3xl">
                                                <FaUserShield />
                                            </button>
                                    }
                                </td>
                                {/* make admin */}
                                <td>
                                    {
                                        user.role === 'admin' ? 'Admin'
                                            :
                                            <button
                                                onClick=
                                                {
                                                    () => handleMakeAdmin(user)
                                                }
                                                className="btn btn-ghost text-blue-500 text-3xl">
                                                <FaUserShield />
                                            </button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;