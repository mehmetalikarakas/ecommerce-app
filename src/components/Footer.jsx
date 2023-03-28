import React from 'react'
import logo from "../img/logo.png"

const Footer = () => {
  return (
    <footer className='flex items-center justify-between px-3 h-28 bg-green-300 rounded-2xl'>
      <img onClick={()=> window.location = "/"} className='w-24 cursor-pointer' src={logo} alt="" />
      <span>
        Made with <b>React.js</b>.
      </span>
    </footer>
  )
}

export default Footer