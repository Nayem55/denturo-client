import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import ConfirmationModal from "../Shared/ConfirmationModal";

const ManageDoctors = () => {
  const [deletingDoc, setDeletingDoc] = useState(null);

  const {
    data: doctors = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("https://doctors-portal-server-mu-flame.vercel.app/doctors", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return;
  }

  const closeModal = () => {
    setDeletingDoc(null);
  };
  const handleDeleteDoc = (doctor) => {
    fetch(`https://doctors-portal-server-mu-flame.vercel.app/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Doctor deleted successFully");
        }
      });
  };

  return (
    <div className="m-5 mt-32 lg:m-10">
      <h1 className="text-xl lg:text-3xl">Manage Doctors : {doctors?.length}</h1>
      <div className="overflow-x-auto appointmentTable mt-10">
        <table className="w-full mb-10">
          <thead className="bg-secondary text-accent">
            <th></th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Specialty</th>
            <th>Action</th>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 m-2 rounded-full">
                      <img src={doctor?.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor?.name}</td>
                <td>{doctor?.email}</td>
                <td>{doctor?.specialty}</td>
                <td>
                  <label
                    onClick={() => setDeletingDoc(doctor)}
                    htmlFor="my-modal"
                    className="btn btn-xs btn-error text-accent"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoc && (
        <ConfirmationModal
          title="Are you sure you want to delete?"
          message="If you confirm it can not be undone"
          successAction={handleDeleteDoc}
          closeModal={closeModal}
          modalData={deletingDoc}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
