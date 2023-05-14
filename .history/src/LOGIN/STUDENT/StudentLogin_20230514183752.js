import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const StudentLogin = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  // const [translate, setTranslate] = useState(false);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const [loading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTranslate(true);
  //   }, 1000);
  // }, []);

  return (
    <div className=" flex flex-row h-[530px] my-20 max-w-5xl mx-auto ">
      <div className=" flex-col flex  ">
        <img
          className="h-20 w-20 absolute  bottom-0 left-64 right-0 top-24"
          src="/rectangle.png"
          alt=""
        />
        <img
          src="/logo.png"
          className="h-16 w-16 mx-auto absolute  object-cover bottom-0 left-64 right-0 top-24"
          alt=""
        />
        <img
          className="hidden  md:inline h-[530px] object-cover rounded-xl"
          src="/sgtb.jpg"
          alt="banner_image"
        />
      </div>

      <div className="bg-white text-left flex  ml-16 flex-col my-8">
        <h2 className="text-3xl  font-semibold">Login</h2>
        <p className="text-[#7F8087] text-[18px] mt-2">
          Welcome to official ERP system of SGTBIMIT
        </p>

        <div className="bg-[#EEEEEE] mt-8 rounded-[32px] max-w-xs">
          <button
            className={`rounded-full "bg-[##EEEEEE]" w-40 h-12 ${
              isClicked ? "bg-[#1B449C] text-white" : "bg-[#EEEEEE]"
            }`}
            onClick={handleClick}
          >
            Student
          </button>

          <button
            className={`rounded-full  w-40 h-12 ${
              !isClicked ? "bg-[#1B449C] text-white" : "bg-[#EEEEEE]  "
            }`}
            onClick={handleClick}
          >
            Faculty
          </button>
        </div>

        <div>
          <div className="mt-10 text-[16px] capitalize  sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label className="block text-left  font-normal leading-6 text-[#2D2D2D]">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-[440px] rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block  font-normal leading-6 text-[#2D2D2D]"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-[440px] rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="text-sm text-right w-[440px] mt-2">
                  <a
                    href="#"
                    className=" font-medium text-black/60 hover:text-black/60"
                  >
                    Forgot password ?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex items-center w-40 justify-center rounded-md bg-[#1B449C] px-3 py-2.5 text-[16px] font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                  <img className="  ml-2" src="/right.png" alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
