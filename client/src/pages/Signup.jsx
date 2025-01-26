import React from "react";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div className=" px-4 md:px-[7vw]">
      <h1 className=" text-3xl font-bold font-sans text-center text-gray-800 pt-12">
        Sign Up
      </h1>

      <form className=" flex flex-col gap-4 pt-10 max-w-xl mx-auto ">
        <input
          type="text"
          placeholder="Username"
          className="text-base px-4 outline-none bg-white py-2 rounded-md "
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className=" text-base px-4 outline-none bg-white py-2 rounded-md"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="text-base px-4 outline-none bg-white py-2 rounded-md"
          id="password"
        />
        <button className=" bg-slate-700 text-white rounded-md py-2 hover:opacity-95">
          SIGN UP
        </button>
      </form>
      <div className=" flex max-w-xl mx-auto text-center pt-6">
        <button className=" bg-red-600 text-white rounded-md py-2 hover:opacity-95 w-full text-center">
          CONTINUE WITH GOOGLE
        </button>
      </div>

      <div className=" flex gap-2 items-center max-w-xl mx-auto py-3">
        <p>Have an account?</p>
        <Link to="/sign-in" className=" text-blue-600">
          Signin
        </Link>
      </div>
    </div>
  );
};

export default Signup;
