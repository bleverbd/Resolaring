import React from "react";
import notify_btn from "../../assets/overview/notify.svg";
import profile from "../../assets/overview/profile.png";

const Profile = () => {
  return (
    <div className="font-Syne flex gap-10 items-center">
      <div>
        <img src={notify_btn} />
      </div>

      <div className="flex gap-2 items-center">
        <div className="overflow-hidden">
          <img className="object-cover rounded-full w-[56px] h-[56px]" src={profile} />
        </div>
        <div>      
          <p className="text-[#071431] font-medium text-lg"> John Doe</p>
          <p className="text-[#798090]">Seller</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
