import React from 'react'
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { removeCard } from '../redux/actions/cardAction';

const Card = () => {

    const dispatch = useDispatch();
    const {cardItems} = useSelector(state => state.card)

    const deleteCard = (id)=> {
      dispatch(removeCard(id))
    }

    console.log("card", cardItems)

  return (
    <div className='w-1/3 h-full border-[5px] border-green-300 fixed top-[110px] right-0 z-50 p-3 bg-white'>
        <div className='flex items-center h-20 justify-between'>
            <h1 className='text-2xl'>Sepetim : </h1>
            <AiOutlineClose size={25} onClick={()=> dispatch({ type:"DRAWER", payload: false})} className="cursor-pointer"/>
        </div>

        {
          cardItems?.map((card,i) => (
            <div key={i} className='h-28 flex items-center justify-between py-4 mt-5'>
              <img src={card?.image} alt='' className='h-24'/>

              <div className='w-44'>
                <div className='font-bold text-sm'>{card?.title} ({card?.qty})</div>
                <div className='opacity-70 text-xs'>{(card?.description).substring(0,55)}...</div>
              </div>
              <div className='font-bold text-lg'>
                {card?.price}
              </div>
              <div onClick={()=>deleteCard(card.id)} className='bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer'>Sil</div>
            </div>
          ))
        }
        
        
    </div>
  )
}

export default Card