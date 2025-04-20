import React from "react";
import cross_icon from "../assets/cross_icon.svg";

const Cross = ({ src, onRemove }) => {
  return (
    <div className="outline-1 outline-[#071431] w-[24px] h-[24px] rounded-full cursor-pointer">
      <button onClick={onRemove}>
        <img className="w-[24px] h-[24px] p-1" src={cross_icon} />
      </button>
    </div>
  );
};

export default Cross;
