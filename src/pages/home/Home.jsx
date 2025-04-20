import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('Here is your toast.');

const Home = () => {
  return (
    <div> 
      <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
      
    
    </div>
  )
}

export default Home
