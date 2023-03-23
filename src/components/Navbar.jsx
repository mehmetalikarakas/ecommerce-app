import React, { useState, useEffect } from 'react'
import {BsLightbulb,BsBasketFill,BsMoonStarsFill} from "react-icons/bs"
import { useDispatch } from 'react-redux';
import logo from "../img/logo.png"

const Navbar = () => {

  const [color,setColor] = useState(false);

  const dispatch= useDispatch();

  useEffect(() => {
    let root = document.getElementById("root");
      if(color){
        root.style.backgroundColor = "gray"
        root.style.color = "black"
      } else {
        root.style.backgroundColor = "white"
        root.style.color = "black"
      }
  }, [color])
  

  return (
    <div className='flex items-center justify-between px-3 h-28 bg-green-300 rounded-2xl'>
      <div className='flex items-center'>
        <img src={logo}  alt="logo" className='w-3/12'/>
      </div>
      <div className='flex items-center space-x-4'>
        <input type={'text'} className="border p-3 outline-none rounded-lg" placeholder="Search"/>
        
        <div onClick={()=>setColor(!color)}>
          {
            color ? <BsMoonStarsFill size={25} className="cursor-pointer" /> : <BsLightbulb size={25} className="cursor-pointer" />
          }
        </div>

        <div onClick={()=> dispatch({ type:"DRAWER", payload: true})} className='relative' >
          <BsBasketFill size={25} className="cursor-pointer"/>
          <span className='absolute top-0 right-0 px-1 bg-red-600 rounded-full text-sm text-white'>3</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar