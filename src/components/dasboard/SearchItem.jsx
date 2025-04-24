import React from 'react'
import search from "../../assets/overview/search_icon.svg"

const SearchItem = () => {
  return (
    <div>

        <div className="bg-[#F5F6F7] rounded-4xl px-5 py-3 flex gap-2 outline outline-[#DFE0E4] ">
        <img src={search}/>
        <input className="focus: outline-none text-[#798090] w-[400px]" type="search" placeholder='Search for product'  />
        </div>

      
    </div>
  )
}

export default SearchItem
