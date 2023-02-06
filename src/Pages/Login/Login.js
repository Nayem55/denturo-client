import React, { useContext } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import google from './google.png'
import { ThemeContext } from "../../Contexts/ThemeContext";
import { useState } from "react";
import useToken from "../../Hooks/useToken";


const Login = () => {
  const {dark} = useContext(ThemeContext);
  const { register, formState: {errors} , handleSubmit } = useForm();
  const [ signInWithEmailAndPassword, loading, error ] = useSignInWithEmailAndPassword(auth);
  const [loginUserEmail,setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

    if(token){
      navigate(from , {replace: true});
    }
    
  const handleLogin=async(data)=>{
    if(loading){
      return
    }
    await signInWithEmailAndPassword(data.email,data.password);
    await setLoginUserEmail(data.email);
  }
  return (
    <div className="h-[600px] flex justify-center items-center p-6 my-20">
      <div className="w-96 flex flex-col items-center border border-secondary px-7 py-12">
        <h1 className="text-3xl text-center text-primary font-bold">Login</h1>
        <form className="w-full" onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text text-secondary">Email</span>{" "}
            </label>
            <input
              type="email"
              className="input input-bordered bg-white text-secondary border-secondary w-full max-w-xs"
              {...register("email", {required:"Email address is required"})}
            />
            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text text-secondary">Password</span>{" "}
            </label>
            <input
              type="password"
              className="input input-bordered bg-white text-secondary border-secondary w-full max-w-xs "
              {...register("password", {required:"Password is required" , minLength:{value:6 , message:'Password must contain atleast 6 characters'}})}
            />
            {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
            <label className="label">
              {" "}
              <span className="label-text text-secondary">
                Forget password?
              </span>{" "}
            </label>
          </div>
          <input
            type="submit"
            className={`btn text-white w-full max-w-xs mt-6 hover:bg-primary border-none ${dark? "bg-primary" : "bg-secondary"}`}
            value="Login"
          />
          <p className="text-red-600 mt-2">{error?.message}</p>
          <p className="mt-2 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary font-bold">
              Sign up{" "}
            </Link>
          </p>
        </form>
           <div className="divider text-secondary">OR</div>
            <button className={`btn btn-outline w-full ${dark? "btn-accent" : "btn-secondary" }`}> 
            <img src={google} className="w-8 mr-2" alt="" />
            CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
