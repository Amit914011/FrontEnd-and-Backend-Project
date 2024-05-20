import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/Usercontext'
import axios from 'axios'
// import { JSON } from 'express'

export default function Cart() {
  let [data,setData]=useState([])

  let {setCartList}=useContext(UserContext)

  async function getData(){
    let result = await axios.get('http://localhost:3000/api/cartGetData')
    setData(result.data)
    setCartList(result.data.length)
  }
  useEffect(()=>{
    getData()
  },[])

    async function cartDeleteData(id){
      let flag=confirm('Are You Sure Remove Product')
      if(flag==true){
        await axios.delete(`http://localhost:3000/api/cartDeleteData/${id}`)
        getData()
      }
    }
    // let x=data.reduce((a,b)=>a+JSON.parse(b.productPrice),0)
  return (
    <div className=''>
      <div className='pt-20'>
       <h1 className='text-center text-2xl font-bold'>Your Cart List Item</h1>
       
       {
        data.map((data)=>(
          <div className='w-full h-[200px] '>
          <div className='w-[90%] m-auto border flex'>
          <div className='w-[200px] h-[200px]'>
            <img src={`http://localhost:3000/${data.image}`} className='w-full h-full' alt="" />
          </div>
          <div className='w-[80%] m-auto'>
           <h1>Product Name  {data.productName}</h1>
           <h1>Product Type {data.productType}</h1>
           <h1>Product Price {data.productPrice}</h1>
           <h1>Product Rating {data.productRating}</h1>
           <button className='bg-red-700 px-2 py-1 text-white rounded mt-2 ' onClick={()=>cartDeleteData(data.id)}>Remove Product</button>
          </div>
          </div>
          </div>
        ))
       }
       <h1 className='text-center text-3xl'>Total Price</h1>
      </div>
      </div>
  )
}
