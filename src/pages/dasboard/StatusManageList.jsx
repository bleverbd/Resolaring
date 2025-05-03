import React from "react";

const StatusManageList = ({ States }) => {
  let textColor = "";
  let bg = "";

  if (States === "Active") {
    bg = "bg-[#2FA75F]";
  } else if (States === "Rejcted") {
    bg = "bg-[#DB2C00]";
  } 
  else
    {
        bg = "bg-[#FEC100]";
  }

  return (
    <div>
      <p
        className={`text-white ${bg} text-lg rounded-4xl xl:w-3/4 w-full px-2 lg:py-2 py-1 text-center`}
      >
        {States}
      </p>
    </div>
  );
};

export default StatusManageList;
