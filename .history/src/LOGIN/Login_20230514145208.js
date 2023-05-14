import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
      <div className="display">
        <div
      className="h-screen w-screen  flex  justify-center">
         <div className="flex flex-col items-center mt-10 space-y-32">
        <h1 className="text-3xl font-semibold bg-red-800 text-white w-full text-center py-5  rounded-4xl">
          SRI GURU TEGH BAHADUR INSTITUE OF MANAGEMENT & IT
        </h1>
        <div className="grid grid-cols-2 gap-28">
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#5a51d6] bg-opacity-60 rounded-xl">
            <h1 className="text-4xl font-extrabold">Faculty</h1>

            <Link
              type="button"
              to="FacultyLogin"
              className="flex items-center justify-center bg-red-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200">
              Login
            </Link>
          </div>
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#d65158] bg-opacity-60 rounded-xl">
            <h1 className="text-4xl font-extrabold">Student</h1>
            <Link
              type="button"
              to="StudentLogin"
              className="flex items-center justify-center bg-red-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200">
              Login
            </Link>
          </div>
        </div>
      </div>
      </div>
     
      </div>
    
  );
};

export default Login;