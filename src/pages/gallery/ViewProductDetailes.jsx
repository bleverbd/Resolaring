import React from "react";
import btnicon from "../../assets/gallery/btn_icon.svg";
import profile from "../../assets/gallery/profile.png";
import calendar from "../../assets/gallery/calendar.svg";
import share from "../../assets/gallery/share.svg";
import love from "../../assets/gallery/love.svg";
import message from "../../assets/gallery/message.svg";
import cartbg1 from "../../assets/gallery/cartbg.jpg";
import { useLocation } from "react-router-dom";
import GalleryHero from "./GalleryHero";
import { useState, useEffect } from "react";
import Btn from "../../components/Btn";
import array from "../../assets/gallery/array.svg"

const ViewProductDetailes = () => {
  const { state } = useLocation();

  const localStorageKey = `comments_${state.id}`;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(localStorageKey);
    setComments(saved ? JSON.parse(saved) : []);
  }, [state.id]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSendClick = () => {
    if (newComment.trim()) {

      
      const newCommentObj = {
        name: "John Doe",
        text: newComment,
        profile: profile,
        time: Date.now(),
      };

      const updatedComments = [...comments, newCommentObj];
      localStorage.setItem(localStorageKey, JSON.stringify(updatedComments));
      setComments(updatedComments);
      setNewComment("");
    }
  };

  const getTimeAgo = (timestamp) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <div>
      
    <div className="font-Syne relative w-full">
      {/* Background Section */}
      <div className="relative overflow-hidden">
        {/* Bg- Image */}
        <div>
          <img
            className="w-full h-[507px] object-cover"
            src={state.cartBackground}
            alt="bg"
          />
        </div>
        {/* Background Gradient */}
        <div
          style={{
            background: `linear-gradient(90deg, #071431 -16.3%, rgba(21, 61, 151, 0.00) 69.32%)`,
          }}
         
          className=" absolute top-0  left-0 w-full h-[507px] "
        ></div>
      </div>

      {/* Titile Section  */}

      <div className="absolute top-25 sm:left-2 lg:left-30 max-w-[1720px] mx-auto my-0">
        <div className="flex flex-col gap-8 px-5">
          {/* Home and Pannel */}
          <div className="flex items-center gap-5">
            <img src={array}/>
            <p className="text-white text-lg ">
              Shared Gallery 

          
            </p>
          </div>
          {/* Tittle */}
          <div className="flex flex-col gap-2 ">
            <div>
              <p className="text-white  w-full text-[56px] font-bold  md:text-5xl xl:text-6xl  ">
             {state.productName}
              </p>
            </div>
            {/* Descripotion */}
            <div>
              <p className="text-white text-xs md:text-sm xl:text-lg w-3/6">
             {state.productDescription}
              </p>
            </div>
          </div>
          {/* Btn */}
          <div className="mt-5 w-55">
            <Btn buttonTitle={"List your Product"} />
          </div>
        </div>
      </div>
    </div>




      <div className="font-Syne max-w-[1520px] mx-auto my-0 mt-[120px] mb-[120px]">
        <div>
          <div className="mb-[48px]">
            <p className="text-5xl text-[#071431] font-semibold">
              {state.productName}
            </p>
          </div>

          <div className="flex items-center justify-between mb-[24px]">
            <div className="flex gap-5 items-center">
              <div className="flex gap-2 items-center">
                <div className="w-[40px] h-[40px]">
                  <img
                    className="rounded-full w-[40px] h-[40px]"
                    src={state.cartProfile}
                  />
                </div>
                <div>
                  <p className="text-[#6A7283]">{state.cartProfileName}</p>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <div className="w-[40px] h-[40px]">
                  <img
                    className="rounded-full w-[40px] h-[40px]"
                    src={calendar}
                  />
                </div>
                <div>
                  <p className="text-[#6A7283]"> {state.date}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="bg-[#B45C3D] px-5 py-2 rounded-4xl">
                <button className="flex gap-2 items-center">
                  <img src={share} />
                  <p className="text-white">share</p>
                </button>
              </div>
              <div>
                <img
                  className="w-[40px] h-[40px] bg-[#F5F6F7] rounded-full p-[10px] "
                  src={love}
                  alt="love_icon"
                />
              </div>
              <div>
                <img
                  className="w-[40px] h-[40px] bg-[#F5F6F7] rounded-full p-[10px]"
                  src={message}
                  alt="message"
                />
              </div>
            </div>
          </div>

          <div className="overflow-hidden ">
            <img
              className="w-full h-[440px] object-cover rounded-xl"
              src={state.cartBackground}
            />
          </div>

          <div className="mt-[24px] w-5/6">
            <p className="text-[#071431] text-5xl font-semibold">
              {`${state.productName} – Specifications, Features, and Performance Details`}
            </p>
          </div>

          <div className="mt-[24px] w-5/6">
            <p className="text-[#6A7283]">{state.productDescription}</p>
          </div>



          <div>
            {comments.map((comment, index) => (
              <div key={index} className="mt-[48px]">
                <div className="flex gap-2">
                  <div className="w-[40px] h-[40px]">
                    <img
                      className="rounded-full w-[40px] h-[40px]"
                      src={comment.profile}
                      alt="Profile"
                    />
                  </div>
                  <div className="bg-[#F5F6F7] rounded-lg px-5 py-2 w-full">
                    <p className="text-[#1E1D30] text-lg font-semibold">
                      {comment.name}
                    </p>
                    <p className="text-[#6A7283] w-5/6">{comment.text}</p>
                  </div>
                </div>
                <p className="text-[#6A7283] pl-12 mt-2">
                  {getTimeAgo(comment.time)}
                </p>
              </div>
            ))}

            <div className="mt-[48px]">
              <p className="text-[#0B0B0B] text-2xl font-semibold">Comment</p>
              <div className="bg-[#F5F6F7] border border-[#DFE0E4] mt-2 rounded-lg">
                <textarea
                  className="w-full px-5 py-2 focus:outline-none"
                  placeholder="Type your message"
                  value={newComment}
                  onChange={handleCommentChange}
                />
              </div>
            </div>
            <div className="bg-bg-btn-color rounded-4xl px-7 py-3 flex justify-center mt-[32px] w-30 ">
              <button
                className="flex gap-2 items-center justify-center group cursor-pointer"
                onClick={handleSendClick}
              >
                <p className="text-[#071431]">Send</p>
                <img
                  className="group-hover:translate-x-2 duration-300"
                  src={btnicon}
                  alt="btn_icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProductDetailes;
