import React from "react";
import { useSelector } from "react-redux";
import "./index.css";

const Loading = () => {
  const { isLoading } = useSelector((state) => state.loadingReducer);
  return isLoading ? (
    <div className="fixed z-50 top-0 left-0 w-screen h-screen bg-black bg-opacity-25 flex justify-center items-center">
      <div className="h-14 loading w-14 border-2 border-solid border-gray-300 animate-spin  rounded-full"></div>
    </div>
  ) : (
    ""
  );
};

export default Loading;
