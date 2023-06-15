import React from "react";

const Project2Btn = ({ url, children }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="d-flex  mb-4 justify-content-center align-items-center ">
      <div className="bg-white p-3 rounded w-25">
        <button
          onClick={handleClick}
          className="btn btn-success w-100 rounded-1"
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default Project2Btn;
