import { useQuery } from "@tanstack/react-query";
import React from "react";

const Alluser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://doctors-portal-server-mu-flame.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });
  const handleMakeAdmin = (id) => {
    fetch(`https://doctors-portal-server-mu-flame.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  return (
    <div className="m-5 mt-32 lg:m-10">
      <h1 className="text-xl lg:text-3xl">All Users</h1>
      <div className="overflow-x-auto appointmentTable mt-10">
        <table className="w-full mb-10">
          <thead className="bg-secondary text-accent">
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Action</th>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role !== "admin" ? (
                    <button
                      onClick={() => handleMakeAdmin(user?._id)}
                      className="btn btn-xs btn-primary text-white"
                    >
                      MAKE ADMIN
                    </button>
                  ) : (
                    "Admin"
                  )}
                </td>
                <td>
                  <button className="btn btn-xs btn-error text-accent">
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alluser;
