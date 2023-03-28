import React, { useState, useEffect } from 'react'
import {BsLightbulb,BsBasketFill,BsMoonStarsFill} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import logo from "../img/logo.png"
import { searchAction } from '../redux/actions/searchAction';

const Navbar = () => {

  const [color,setColor] = useState(false);

  const dispatch= useDispatch();
  const {cardItems} = useSelector(state => state.card)
  const [search,setSearch] = useState("")

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


  const searchPost = (e) => {
    if(e.key === "Enter"){
      dispatch(searchAction(search));
    }
  }
  

  return (
    <div className='flex items-center justify-between px-3 h-28 bg-green-300 rounded-2xl'>
      <div className='flex items-center cur' onClick={()=> window.location = "/"}>
        <img src={logo}  alt="logo" className='w-3/12 cursor-pointer'/>
      </div>
      <div className='flex items-center space-x-4'>
        <input value={search} onKeyPress={searchPost} onChange={e => setSearch(e.target.value)} type={'text'} className="border p-3 outline-none rounded-lg" placeholder="Search"/>
        
        <div onClick={()=>setColor(!color)}>
          {
            color ? <BsMoonStarsFill size={25} className="cursor-pointer" /> : <BsLightbulb size={25} className="cursor-pointer" />
          }
        </div>

        <div onClick={()=> dispatch({ type:"DRAWER", payload: true})} className='relative' >
          <BsBasketFill size={25} className="cursor-pointer"/>
          <span className='absolute top-0 right-0 px-1 bg-red-600 rounded-full text-sm text-white'>{cardItems.length}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar