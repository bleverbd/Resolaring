import NewComponet from '@/components/FilterBy';
import React, { useState } from 'react'

const Home = () => {
  const [a,b]=useState("a");
  const abc=()=>{
    b("b")
  }
  return (
    <div> 

      <p> {a}</p>
      <button onClick={abc}>click me</button>

      <NewComponet/>
     
    </div>
  )
}

export default Home
