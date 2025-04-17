import NewComponet from '@/components/FilterBy';
import React, { useState } from 'react'

const Home = () => {
  return (
    <div> 
      
    <input  type="text" placeholder="Product Name" />
    <input  type="text" placeholder="Product Quantity"/>
    <button>Submit</button>
    <ul id="card_containter">

    </ul>
    </div>
  )
}

export default Home
