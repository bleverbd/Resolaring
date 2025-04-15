import React from "react";
import footer_icon from "../assets/footer_icon.svg";

import social_icon1 from "../assets/media_icon1.svg";
import social_icon2 from "../assets/media_icon2.svg";
import social_icon3 from "../assets/media_icon3.svg";
import social_icon4 from "../assets/media_icon4.svg";
import Btn from "./Btn";
import { Link } from "react-router-dom";
import Language from "./Language";





const footerelemet = [
  { path: "/", label: "Home" },
  { path: "/resolaring", label: "Why Resolaring?" },
  { path: "/process", label: "The Recycling Process" },
  { path: "/marketplace", label: "Marketplace" },
  { path: "/gallery", label: "Shared Gallery" },
  { path: "/bookonline", label: "Book Online" },
  { path: "/", label: "Become a Seller" },
  { path: "/", label: "Explore the Marketplace" },
];

const FooterItem = () => {
  return (
    <ul className="flex flex-col gap-3 text-[#C1C4CC]">
      {footerelemet.map((item, index) => (
        <li className="hover:text-white duration-300" key={index}>
          <Link to={item.path}> {item.label}</Link>{" "}
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <div className="font-Syne bg-[#071431] text-[#C1C4CC]">
      <div className="max-w-[1520px] mx-auto my-0">
        <div className="flex gap-15 pt-15 pb-10 px-5 ">
          {/* 1st Part */}
          <div className="flex flex-col gap-5 w-4/12">
            <div>
              <div className="flex items-center gap-5">
                <div>
                  {" "}
                  <img src={footer_icon} alt="logo_Icon"></img>{" "}
                </div>
                <div>
                  {" "}
                  <p className="text-white text-4xl font-semibold">
                    Resolaring{" "}
                  </p>{" "}
                </div>
              </div>
              <div>
                {" "}
                <p className="text-[#C1C4CC] text-[13px]">
                  Recycling and installing panels for a better future
                </p>{" "}
              </div>
            </div>

            <div>
              <p className="text-[#C1C4CC] text-[14px]">
                At Resolaring, we believe in creating a sustainable future by
                promoting the reuse and recycling of solar equipment. Our
                platform connects buyers and sellers of second-hand solar
                panels, reducing waste and supporting green energy initiatives.
              </p>
            </div>

            <div>
              <div className="flex flex-col gap-2">
                <div>
                  {" "}
                  <p className="text-white text-lg font-semibold"> Support</p>
                </div>

                <div className="text-[#C1C4CC]">
                  <p> Email: resolaring@gmail.com</p>
                  <p> Phone: +34 618207554</p>
                  <p> Location: Montferrer y Castellbò, 25712</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-3 items-center">
                <div>
                   <Language/>
                </div>
               
                <div className="flex gap-3 items-center w-[24px] h-[24px]">
                  <img src={social_icon1} alt="" />
                  <img src={social_icon2} alt="" />
                  <img src={social_icon3} alt="" />
                  <img src={social_icon4} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* 2nd part */}

          <div className="flex flex-col gap-4 w-2/12">
            <div>
              {" "}
              <p className="text-white text-lg font-semibold"> Quick Link </p>
            </div>
            <div>
              <FooterItem />
            </div>
          </div>

          {/* 3rd Part */}
          <div className="w-5/12 flex flex-col gap-5">
            <div>
              <p className="text-white text-lg font-semibold"> Contact</p>
            </div>

            <div>
              <p className="text-[#C1C4CC]">
                Our team is here to answer any questions you may have, so please
                contact us by filling out the following fields or directly via
                email or phone!
              </p>
            </div>

            <div className=" flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white"> Name*</label> <br />
                  <input
                    className="mt-1 w-full border border-white/20 bg-white/10 rounded-sm text-[#C1C4CC] text-xs focus:outline outline-bg-btn-color py-3 px-5"
                    type="text"
                    placeholder="Name here"
                  />
                </div>

                <div>
                  <label className="text-white"> Cognoms*</label> <br />
                  <input
                    className=" mt-1 w-full border border-white/20 bg-white/10 rounded-sm text-[#C1C4CC] text-xs focus:outline outline-bg-btn-color py-3 px-5"
                    type="text"
                    placeholder="Cognoms here"
                  />
                </div>

                <div>
                  <label className="text-white"> Telephone*</label> <br />
                  <input
                    className="mt-1 w-full border border-white/20 bg-white/10 rounded-sm text-[#C1C4CC] text-xs focus:outline outline-bg-btn-color py-3 px-5"
                    type="tel"
                    placeholder="Number here"
                  />
                </div>

                <div>
                  <label className="text-white"> E-mail*</label> <br />
                  <input
                    className=" mt-1 w-full border border-white/20 bg-white/10 rounded-sm text-[#C1C4CC] text-xs focus:outline outline-bg-btn-color py-3 px-5"
                    type="email"
                    placeholder="Email here"
                  />
                </div>
              </div>

              <div>
                <label className="text-white mt-2"> Message*</label> <br />
                <textarea
                  className="mt-1 w-full h-32 resize-y overflow-y-auto border border-white/20 bg-white/10 rounded-sm text-[#C1C4CC] text-xs focus:outline outline-bg-btn-color py-3 px-5"
                  placeholder="Message here"
                ></textarea>
              </div>
              <div className="w-47">
                <Btn buttonTitle={" Submit here"} />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20">
          <div className="flex items-center justify-center gap-2 mt-5 pb-10 mx-auto">
            {" "}
            <img className="w-[32px] h-[32px]" src={footer_icon} />{" "}
            <p className="text-[#C1C4CC] text-sm">
              {" "}
              Copyright 2025. All Rights Reserved. Powered by the Awesomeness of
              Fresh Fruit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
