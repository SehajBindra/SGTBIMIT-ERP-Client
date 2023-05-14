import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const StudentLogin = () => {
  const [translate, setTranslate] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTranslate(true);
    }, 1000);
  }, []);

  return (
    <div className=" grid grid-cols-4 h-[530px] my-16 mx-auto max-w-7xl ">
      <div className=" col-span-2">
        <img
          className="hidden md:inline h-[530px] object-cover rounded-md"
          src="/sgtb.jpg"
          alt="banner_image"
        />
      </div>

      <div className="bg-white  col-span-2">
        <h2 className="text-3xl">Login</h2>
        <p>Welcome to the ERP system of SGTBIMIT</p>

        <div
          className="flex flex-row items-center mx-auto justify-center h-[56px] text-[
#1B449C] bg-[#EEEE] max-w-xs  space-x-16 capitalize text-[20px] rounded-[32px]"
        >
          <p>student</p>
          <p>faculty</p>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
