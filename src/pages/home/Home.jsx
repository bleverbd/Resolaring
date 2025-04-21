import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

const adduusafsa=()=>{
  toast('Here is your toast.');

};


const Home = () => {
  
  return (
    <div> 
      <div>
      <button onClick={adduusafsa}>Submit</button>
      <Toaster />
    </div>
      
    
    </div>
  )
}

export default Home
