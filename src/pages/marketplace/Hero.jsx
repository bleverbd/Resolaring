import React from 'react'
import marketplace_banner from "../../assets/marketplace_banner_img.jpg"
import Btn from '../../components/Btn'
import { NavLink } from 'react-router-dom'

function Hero() {
    
  return (
    <div className="font-Syne relative w-full">
        <div className="relative overflow-hidden">
            <div> 
                <img className="w-full h-[507px] object-cover" src={marketplace_banner} alt="marketplace_banner"/>     
            </div>
            <div style={{
                background: `linear-gradient(90deg, #071431 -16.3%, rgba(21, 61, 151, 0.00) 69.32%)`
            }} className=" absolute top-0  left-0 w-full h-[507px] ">

            </div> 
        </div>

        <div className="absolute top-25 left-45 max-w-[1720px] mx-auto flex flex-col gap-6">
            <div>
                <p className="text-white text-lg "> <span className="hover:underline duration-300 cursor-pointer"> Home </span> <span> > </span> <span> Panels </span> </p>
            </div>

            <div>
            <p className="text-white text-6xl font-bold w-7/12">
                Your market for solar panels
            </p>
            </div>

            <div>
            <p className="text-white text-lg w-8/12">
                Exploring Market Opportunities, Industry Trends, and Growing Demand for Solar Panels in the Renewable Energy Sector
            </p>
            </div>

            <div >
                <Btn buttonTitle={'List your Product'} />
            </div>

        </div>

      
    </div>
  )
}

export default Hero
