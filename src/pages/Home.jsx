import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { productsAction } from "../redux/actions/productsAction"
import { searchAction } from '../redux/actions/searchAction'

const Home = () => {

  const dispatch = useDispatch()
  const {products} = useSelector(state => state.products)
  const {search} = useSelector(state => state.search)

  useEffect(() => {
    dispatch(productsAction())
    dispatch(searchAction())
  }, [dispatch])
  
  console.log("products",products)
  return (
    <div className='flex flex-wrap justify-center'>
      { 
        search.length > 0 ?
        search.map((prod, index)=>(
          <ProductCard key={index} prod={prod}></ProductCard>
        )) :
        products && products.map((prod, index)=>(
          <ProductCard key={index} prod={prod}></ProductCard>
        ))
      } 
    </div>
  )
}

export default Home