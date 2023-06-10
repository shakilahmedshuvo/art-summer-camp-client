import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
    // using tenstack react sQuery
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    return (
        <div>
            <h2>
                {users.length}
            </h2>
        </div>
    );
};

export default ManageUsers;