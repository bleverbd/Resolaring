import React from "react";

const Status = ({ States }) => {
  let textColor = "";
  let borderColor = "";

  if (States === "Pending") {
    textColor = "text-[#FEC100]";
    borderColor = "outline-[#FEC100]";
  } else if (States === "Completed") {
    textColor = "text-[#2FA75F]";
    borderColor = "outline-[#2FA75F]";
  } else if (States === "Shipped")
    {
    textColor = "text-[#B45C3D]"; 
    borderColor = "outline-[#B45C3D]";
  }

  return (
    <div>
      <p
        className={`${textColor} ${borderColor} text-lg  outline rounded-4xl w-3/4 px-2 py-2 text-center`}
      >
        {States}
      </p>
    </div>
  );
};

export default Status;
