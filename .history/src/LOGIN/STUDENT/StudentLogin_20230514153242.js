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
    <div className=" grid grid-cols-4 h-[710px] my-16 mx-auto max-w-7xl ">
      <div className=" col-span-2">
        <img
          className="hidden md:inline h-[640px] object-cover rounded-md"
          src="/sgtb.jpg"
          alt="banner_image"
        />
      </div>

      <div className="bg-white  col-span-2">
        <h2>hello world</h2>
      </div>
    </div>
  );
};

export default StudentLogin;
