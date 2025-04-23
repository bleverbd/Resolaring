import React, { useRef, useEffect } from "react";

import cross_icon from "../../assets/cross_icon.svg";
import print from "../../assets/overview/printer.svg";
import download from "../../assets/overview/download.svg";


const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div ref={modalRef} className="bg-white rounded-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
        >
          <img className="hover:scale-105 duration-300 px-[64px] mt-3" src={cross_icon} />
        </button>

        {/* Modal Content */}





        <div className="font-Syne w-[1320px] pb-10">

           <div className="flex items-center justify-between mt-[50px] px-[64px]">
                <div><p className="text-[#0F2A5C] text-3xl font-semibold">Product Order Details</p></div>
                <div className="flex items-center gap-10">
                    <div className="flex gap-2 items-center">
                        <img src={print}/> 
                        <p className="text-[#B45C3D] font-semibold text-[20px]"> Print </p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={download}/> 
                        <p className="text-[#B45C3D] font-semibold text-[20px]"> Download </p>
                    </div>

                </div>
                
           </div>

           <div className="w-full px-[64px] mt-8">

            <div className="flex items-center border-b-2 border-b-[#EBECEF] py-2">
                <p className="w-50 text-[#071431] text-[20px]">Order ID:</p>
                <p className="text-[#798090] text-[20px]">#10001</p>
                
            </div>



            <div className="flex items-center border-b-2 border-b-[#EBECEF] py-2">
                <p className="w-50 text-[#071431] text-[20px]">Date:</p>
                <p className="text-[#798090] text-[20px]">#10001</p>
                
            </div>

            <div className="flex items-center border-b-2 border-b-[#EBECEF] py-2">
                <p className="w-50 text-[#071431] text-[20px]">Product name:</p>
                <p className="text-[#798090] text-[20px]">#10001</p>
                
            </div>

            <div className="flex items-center border-b-2 border-b-[#EBECEF] py-2">
                <p className="w-50 text-[#071431] text-[20px]">Buyer Name:</p>
                <p className="text-[#798090] text-[20px]">#10001</p>
                
            </div>


            <div className="flex items-center border-b-2 border-b-[#EBECEF] py-2">
                <p className="w-50 text-[#071431] text-[20px]">Email:</p>
                <p className="text-[#798090] text-[20px]">#10001</p>
                
            </div>


            <div className="flex items-center border-b-2 border-b-[#EBECEF] py-2">
                <p className="w-50 text-[#071431] text-[20px]">Phone:</p>
                <p className="text-[#798090] text-[20px]">#10001</p>
                
            </div>
            <div className="flex items-center border-b-2 border-b-[#EBECEF] py-2">
                <p className="w-50 text-[#071431] text-[20px]">Country:</p>
                <p className="text-[#798090] text-[20px]">#10001</p>
                
            </div>
            <div className="flex items-center border-b-2 border-b-[#EBECEF] py-2">
                <p className="w-50 text-[#071431] text-[20px]">City:</p>
                <p className="text-[#798090] text-[20px]">#10001</p>
                
            </div>
            <div className="flex items-center border-b-2 border-b-[#EBECEF] py-2">
                <p className="w-50 text-[#071431] text-[20px]">Zip Code:</p>
                <p className="text-[#798090] text-[20px]">#10001</p>
                
            </div>

            <div className="flex items-center border-b-2 border-b-[#EBECEF] py-2">
                <p className="w-50 text-[#071431] text-[20px]">State:</p>
                <p className="text-[#798090] text-[20px]">#10001</p>
                
            </div>

            <div className="flex items-center border-b-2 border-b-[#EBECEF] py-2">
                <p className="w-50 text-[#071431] text-[20px]">Delivery Address:</p>
                <p className="text-[#798090] text-[20px]">#10001</p>
                
            </div>
            <div className="flex items-center border-b-2 border-b-[#EBECEF] py-2">
                <p className="w-50 text-[#071431] text-[20px]">Shipping Fee:</p>
                <p className="text-[#798090] text-[20px]">#10001</p>
                
            </div>


        
           
           </div>

        </div>




      </div>
    </div>
  );
};

export default Modal;
