import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsAction } from "../redux/actions/productsAction"

const Home = () => {

  const dispatch = useDispatch()
  const {products} = useSelector(state => state.products)

  useEffect(() => {
    dispatch(productsAction())
  }, [dispatch])
  
  console.log(products)
  return (
    <div>Home</div>
  )
}

export default Home