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
    <div className=" grid grid-cols-4 h-[600px] ">
      <div className=" bg-orange-400 col-span-2">
        <h2>hello world</h2>
      </div>

      <div className="bg-white  col-span-2">
        <h2>hello world</h2>
      </div>
    </div>
  );
};

export default StudentLogin;
