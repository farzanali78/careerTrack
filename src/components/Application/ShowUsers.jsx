    import React, { useEffect, useState } from "react";
    import { toast } from "react-toastify";

    function ShowUsers() {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const usersData = JSON.parse(localStorage.getItem("User")) || [];
        setAllUsers(usersData);
    }, []);

    const handleDeleteUser = (userName) =>{
    const updatedUsers = allUsers.filter((u)=> u.userName !== userName)
    localStorage.setItem("User", JSON.stringify(updatedUsers))
    localStorage.removeItem(`applications_${userName}`)
    setAllUsers(updatedUsers)
    toast.success(`${userName} was removed`)
    }


    return (
        <div className="max-w-4xl min-h-screen mx-auto p-6">
        <h1 className="text-2xl font-bold text-[#1B3A6B] mb-6">Manage Users</h1>

        

        {allUsers.length === 0 ? (
            <p className="text-center text-gray-500 mt-6">
            No users registered yet.
            </p>) :(
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="w-full text-center border-collapse">
            <thead>
                <tr className="bg-[#1B3A6B]  text-white">
                <th className="px-4 py-3 text-sm font-semibold">Username</th>
                <th className="px-4 py-3 text-sm font-semibold">Email</th>
                <th className="px-4 py-3 text-sm font-semibold text-right">
                    Actions
                </th>
                </tr>
            </thead>
            <tbody>
                {allUsers.map((u, index) => (
                <tr
                    key={u.id}
                    className={`${
                    index % 2 === 0 ? "bg-white" : "bg-[#F7F7F5]"
                    } border-t border-gray-200 hover:bg-amber-50 transition-colors`}
                >
                    <td className="px-4 py-3 text-sm font-medium text-[#1B3A6B]">
                    {u.userName}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{u.Email}</td>
                    <td className="px-4 py-3 text-right">
                    <button
                        onClick={() => handleDeleteUser(u.userName)}
                        className="text-red-600 cursor-pointer hover:text-red-700 text-sm font-semibold px-3 py-1 rounded-full hover:bg-red-50 transition-colors"
                    >
                        Delete
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        )}
        </div>
    );
    }

    export default ShowUsers;
