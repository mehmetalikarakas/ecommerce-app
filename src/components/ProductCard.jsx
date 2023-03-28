import React from 'react'

const ProductCard = ({prod}) => {
  return (
    <div onClick={()=> window.location = `detail/${prod.id}`} className='hover:border-green-300 w-1/5 h-[350px] border rounded-xl m-2 flex flex-col items-center p-1 cursor-pointer'>
        <img className='h-40 object-cover' src={prod?.image} alt="product"/>
        <div className='font-bold h-[3rem] text-center '>{prod?.title.substring(0,25)}</div>
        <div className='font-bold bg-green-300'>{prod?.price} TL</div>
        <div className='text-center opacity-70 text-sm'>{prod?.description.substring(0,45)}...</div>
        <button className='h-8 w-28 border-green-300 font-bold rounded-xl bg-green-300'>Sepete Ekle</button>
    </div>
  )
}

export default ProductCard