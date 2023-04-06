import React from "react";
// import { useDispatch } from "react-redux";
// import { getNotice } from "../../redux/actions/adminActions";
import FacBody from "./FacBody";
import FacHeader from "./FacHeader";
import FacSidebar from "./FacSidebar";

const FacultyHome = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getNotice());
//   }, [dispatch]);
  return (
    <div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
      <div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
        <FacHeader />
        <div className="flex flex-[0.95]">
          <FacSidebar />
          <FacBody />
        </div>
      </div>
    </div>
  );
};

export default FacultyHome;