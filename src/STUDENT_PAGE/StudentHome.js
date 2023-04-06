import React from "react";
// import { useDispatch } from "react-redux";
// import { getNotice } from "../../redux/actions/adminActions";
// import {
//   getAttendance,
//   getSubject,
//   getTestResult,
// } from "../../redux/actions/studentActions";

import StuBody from "./StuBody";
import StuSidebar from "./StuSidebar";
import StuHeader from "./StuHeader";


const StudentHome = () => {
//   const user = JSON.parse(localStorage.getItem("user"));

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getSubject(user.result.department, user.result.year));
//     dispatch(
//       getTestResult(
//         user.result.department,
//         user.result.year,
//         user.result.section
//       )
//     );
//     dispatch(
//       getAttendance(
//         user.result.department,
//         user.result.year,
//         user.result.section
//       )
//     );
//     dispatch(getNotice());
//   }, [dispatch]);

  return (
    <div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
      <div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
        <StuHeader />
        <div className="flex flex-[0.95]">
         <StuSidebar/>
          <StuBody/>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;