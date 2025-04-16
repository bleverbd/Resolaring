import React from 'react'
import Logo from './Logo'
import ShoppingCard from './ShoppingCard'

const NavHamburger = () => {
  return (
    <div>
       <div className="fle items-center justify-between">
       <Logo/>
       <ShoppingCard/>
       </div>
    </div>
  )
}

export default NavHamburger
