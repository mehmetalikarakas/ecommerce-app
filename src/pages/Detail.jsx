import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productsActionDetail } from '../redux/actions/productsAction';
import { CgMathMinus,CgMathPlus } from "react-icons/cg"
import { productsCardAction } from '../redux/actions/cardAction';

const Detail = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector(state => state.product)
  const [count,setCount] = useState(0);

  useEffect(() => {
    dispatch(productsActionDetail(id))
  }, [dispatch(productsActionDetail(id))])

  const increment =(stock)=>{
    if(count <= stock){
      setCount(count + 1)
    } else {

    }
  }
  
  const decrement = ()=>{
    if(count > 0){
      setCount(count - 1)
    } else {
      
    }
  }

  const addCard = () => {
    dispatch(productsCardAction(id,count))
    dispatch({type:"DRAWER",payload:true})
  }

  return (
    <div className='w-full flex justify-center items-center m-2'>
      <img className='w-1/3 ' src={product?.image} alt="tset-phot"/>
      <div>
        <div className='w-2/3 space-y-5'>
          <div className='font-bold text-xl'>{product?.title}</div>
          <div className='opacity-70 '>{product?.description}</div>
          <div className='opacity-70 '>Category : {product?.category}</div>
          <div className='opacity-70 '>Rate : {product?.rating?.rate} - Stok : {product?.rating?.count}</div>
          <div className='opacity-70 font-bold'>Fiyat : {product?.price}</div>

          <div className='flex items-center space-x-4'>
            <CgMathMinus onClick={decrement} className='cursor-pointer border rounded-full p-1' size={30}/>
            <span className='text-2xl'>{count}</span>
            <CgMathPlus onClick={()=>increment(product?.rating?.count)} className='cursor-pointer border rounded-full p-1'  size={30}/>
          </div>
          <button onClick={addCard} className='p-3 w-full border-green-300 font-bold rounded-xl bg-green-300'>Sepete Ekle</button>
        </div>
      </div>
    </div>
  )
}

export default Detail