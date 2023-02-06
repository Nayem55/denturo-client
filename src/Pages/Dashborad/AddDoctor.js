import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../Contexts/ThemeContext";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { dark } = useContext(ThemeContext);
  const imgHostKey = process.env.REACT_APP_imgbb_Key;
  const navigate = useNavigate();

  const HandleAddDoctor = (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append('image',image); 
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url,{
        method: 'POST',
        body: formData
    })
    .then(res=>res.json())
    .then(imgData=>{
        if(imgData.success){
            const doctor = {
                name: data.name,
                email: data.email,
                specialty: data.specialty,
                image: imgData.data.url
            }
            fetch('http://localhost:5000/doctors',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json',
                    authorization : `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(doctor)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                toast.success('Doctor added successfully')
                navigate('/dashboard/managedoctors')
            })
        }
    })

};

  return (
    <div className="m-10 doc-form">
      <h1 className="text-3xl mb-5 text-center">Add Doctor</h1>
      <form className="w-full" onSubmit={handleSubmit(HandleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-secondary">Name</span>{" "}
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered bg-white text-secondary border-secondary w-full max-w-xs"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-600">{errors.name?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-secondary">Email</span>{" "}
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered bg-white text-secondary border-secondary w-full max-w-xs"
            {...register("email", {
              required: "Email address is required",
            })}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-secondary">Specialty</span>{" "}
          </label>
          <select {...register('specialty')}
           className="select select-bordered bg-white text-secondary border-secondary w-full max-w-xs">
            <option disabled selected>
              Pick a Specialty
            </option>
            <option>Cavity Protection</option>
            <option>Oral Surgery</option>
            <option>Pediatric Dental</option>
            <option>Cosmetic Dentistry</option>
            <option>Teeth Orthodontics</option>
            <option>Teeth Cleaning</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-secondary">Image</span>{" "}
          </label>
          <input
            type="file"
            className="input input-bordered pt-2 bg-white text-secondary border-secondary w-full max-w-xs"
            {...register("img", { required: "Image is required" })}
          />
          {errors.img && (
            <p className="text-red-600">{errors.img?.message}</p>
          )}
        </div>
        <input
          type="submit"
          className={`btn text-white w-full max-w-xs mt-6 hover:bg-primary border-none ${
            dark ? "bg-primary" : "bg-secondary"
          }`}
          value="Add Doctor"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
