import React, { useState } from "react";
import loginbg from "../../assets/loginbg.png";
import { useNavigate } from "react-router-dom";

const SendCode = () => {
  const navigate = useNavigate();

    const [otp,setOtp] =useState("");
    const [errors, setErrors] = useState({});
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let tempErrors = {};
  
      if (!otp.trim())
         {tempErrors.otp = "OTP is required";}
  
      else{
          navigate("/newpassword"); // navigate only if email is not empty
        }
      
  
      setErrors(tempErrors);
  
    };
  return (
    <div>
      <div className=" max-w-[1520px] my-0 mx-auto flex gap-10 items-center px-30 mt-20">
        <div className="flex flex-col gap-8 w-1/2 ">
          <p className="text-[##071431] text-5xl font-semibold">
            {" "}
            We will send verification code on your email ID
          </p>

          <form onClick={handleSubmit}>
            <div>
              <label for="box">Code</label>
              <input
                className=" mt-2 focus:outline-none border border-[#DFE0E4] bg-[#F5F6F7] focus:ring-2 w-full text-[#6A7283] px-5 py-3 rounded-xl font-medium text-sm"
                type="text"
                name="box"
                placeholder="Enter code here" 
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              {errors.otp && (
                  <p className="text-red-500 text-sm mt-1">{errors.otp}</p>
                )}
            </div>

            <div className="mt-5">
           
                {" "}
                <button className="bg-bg-btn-color  rounded-2xl w-full hover:scale-105 duration-300 cursor-pointer">
                  {" "}
                  <p className="my-3">Verify</p>{" "}
                </button>
            
            </div>
          </form>
        </div>

        <div className="overflow-hidden w-1/2">
          <img
            className="w-[707px] h-[805px] object-cover rounded-xl"
            src={loginbg}
          />
        </div>
      </div>
    </div>
  );
};

export default SendCode;
