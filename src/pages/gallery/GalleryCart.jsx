import React from "react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import dot from "../../assets/gallery/dot.svg";
import love from "../../assets/gallery/love.svg";
import message from "../../assets/gallery/message.svg";
import btnicon from "../../assets/gallery/btn_icon.svg";
import facebook from "../../assets/gallery/facebook.svg";
import x from "../../assets/gallery/x.svg";
import link from "../../assets/gallery/link.svg";
import instragram from "../../assets/gallery/instragram.svg";

import share from "../../assets/gallery/share1.svg";
import report from "../../assets/gallery/report.svg";
import { NavLink } from "react-router-dom";

const GalleryCart = ({ product }) => {
  const currentURL = window.location.href;

  const shareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentURL
    )}`;
    window.open(url, "_blank");
  };

  const shareTwitter = () => {
    const text = "Check out this page!";
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentURL
    )}&text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const shareInstagram = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent("Check out this page: " + currentURL)}`;
    window.open(url, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard
      .writeText(currentURL)
      .then(() => alert("Link copied to clipboard!"))
      .catch(() => alert("Failed to copy link"));
  };

  const [open, setOpen] = useState(false);
  const handleAction = () => {
    setOpen(false);
  };

  return (
    <div className="font-Syne max-w-[1520px] my-0 mx-auto">
      <div>
        {/* Card Section */}

        <div className="mt-[48px] relative border border-[#DFE0E4] rounded-xl group overflow-hidden w-[332px] h-[529px]">
          {/* Top Icon */}
          <div>
            <img
              className="w-[40px] h-[40px] bg-white rounded-full p-[10px] absolute top-3 right-5 z-20"
              src={love}
              alt="love_icon"
            />
          </div>
          <div>
            <img
              className="w-[40px] h-[40px] bg-white rounded-full p-[10px] absolute top-3 right-20 z-20"
              src={message}
              alt="message"
            />
          </div>
          {/* Cart BG */}
          <div className="overflow-hidden">
            <img
              className="h-[289px] w-full object-cover rounded-t-xl group-hover:scale-110 duration-300"
              src={product.cartBackground}
              alt="card bd"
            />
          </div>

          {/* Cart Down Start */}

          <div className=" flex flex-col gap-3  my-5 mx-5 ">
            {/* Name And Profile */}

            <div className="flex items-center justify-between ">
              <div className="flex gap-2 items-center">
                <div className="w-[40px] h-[40px]">
                  <img
                    className="rounded-full w-[40px] h-[40px]"
                    src={product.cartProfile}
                    alt="card_profile"
                  />
                </div>
                <div>
                  <p className="text-[#6A7283] text-sm font-medium">
                    {product.cartProfileName}
                  </p>
                </div>
              </div>

              <div>
                <Popover open={open} onOpenChange={setOpen} >
                  <PopoverTrigger  className="cursor-pointer">
                    <img src={dot} alt="card_star" />
                  </PopoverTrigger>
                  <PopoverContent className=" p-0 font-Syne text-[#6A7283] font-medium text-lg w-40">
                    <div>
                      <Dialog >
                        <DialogTrigger >
                          <div  className=" cursor-pointer flex gap-2 items-center hover:bg-[#F5F6F7] hover:w-40 px-5 py-2">
                            <img src={share} />
                            <p  >Share</p>
                          </div>
                        </DialogTrigger>
                        <DialogContent   className="flex flex-col gap-10 items-center justify-center px-5 py-5 w-1/2 h-2/4">
                          <div>
                            <p className="text-[#071431] font-semibold text-6xl">
                              Share
                            </p>
                          </div>
                          <div className="flex gap-15 items-center">
                            <img
                              className="cursor-pointer w-[60px] h-[60px]"
                              src={facebook}
                              alt="Facebook"
                              onClick={shareFacebook}
                            />
                            <img
                              className="cursor-pointer w-[60px] h-[60px]"
                              src={x}
                              alt="Twitter"
                              onClick={shareTwitter}
                            />
                            <img
                              className="cursor-pointer w-[60px] h-[60px]"
                              src={instragram}
                              alt="Instagram"
                              onClick={shareInstagram}
                            />
                            <img
                              className="cursor-pointer w-[60px] h-[60px]"
                              src={link}
                              alt="Copy Link"
                              onClick={copyLink}
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>

                    <div>
                      <Dialog>
                        <DialogTrigger>
                          <div className=" cursor-pointer flex gap-2 items-center hover:bg-[#F5F6F7] hover:w-40 px-5 py-2">
                            <img src={report} />
                            <p>Report</p>
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                              This action cannot be undone. This will
                              permanently delete your account and remove your
                              data from our servers.
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* JA Solar 200W Text */}
            <div>
              <p className="text-[#192A48] font-semibold text-xl">
                {product.productName}
              </p>
            </div>

            {/* name Description */}
            <div>
              <p className="text-[#6A7283] text-sm text-wrap text-justify">
                {product.productDescription}
              </p>
            </div>

            {/* Btn */}
            <div className="cursor-pointer outline outline-[#071431] rounded-4xl px-6 py-2 w-2/4 group-hover:bg-bg-btn-color group-hover:outline-none">
              <NavLink to={`/gallery/${product.id}`} state={product}>
                <button className="flex gap-1 items-center cursor-pointer ">
                  <p className="text-[#071431] text-sm">View Details</p>
                  <img
                    className="group-hover:translate-x-2 duration-300"
                    src={btnicon}
                    alt="btn_icon"
                  />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCart;
