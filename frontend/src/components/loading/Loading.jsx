import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex absolute top-0 bg-black/50 justify-center items-center h-screen w-screen">
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  );
};

export default Loading;
