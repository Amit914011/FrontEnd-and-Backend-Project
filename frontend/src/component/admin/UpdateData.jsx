import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function UpdateData() {
    let [data,setData] =useState({
        productName:'',
        productType:'',
        productPrice:'',
        productRating:''
    })
    let {productName,productType,productPrice,productRating}=data
    function handlechange(e){
        setData({...data,[e.target.name]:e.target.value})
    }
    let {id} = useParams()
    async function getData(){
        let result=await axios.get(`http://localhost:3000/api/viewData/${id}`)
        setData(result.data[0])
    }
    useEffect(()=>{
        getData()
    },[])

   async function handleSubmit(){
      await  axios.put(`http://localhost:3000/api/updateData/${id}`,data)
    }
  return (
    <div>
      <div className='w-full flex justify-center items-center mt-5'>
      <div>
        <h1 className='font-bold text-2xl'>Update Data</h1>
        <form action="" method='post'>
            <label htmlFor="">Product Name</label><br />
            <input className='border w-[300px] rounded mb-2 px-1' placeholder='Enter your Product Name ' type="text" name="productName" value={productName} onChange={handlechange} id="" /><br />
            <label htmlFor="">Product Type</label><br />
            <input className='border w-[300px] rounded mb-2 px-1' placeholder='Enter your Product Type ' type="text" name="productType" value={productType} onChange={handlechange} id="" /><br />
            <label htmlFor="">Product Price</label><br />
            <input className='border w-[300px] rounded mb-2 px-1' placeholder='Enter your Product Price ' type="text" name="productPrice" value={productPrice} onChange={handlechange} id="" /><br />
            <label htmlFor="">Product Rating</label><br />
            <input className='border w-[300px] rounded mb-5 px-1' placeholder='Enter your Product Rating ' type="text" name="productRating" value={productRating} onChange={handlechange} id="" /><br />
            <Link to='/admin' onClick={handleSubmit} className='px-4 py-2 mx-5 bg-yellow-500 rounded-md font-bold text-white'>Update Data</Link>
            <Link to='/admin' className='px-4 py-2 mx-5 bg-green-600 rounded-md font-bold text-white'>View Data</Link>
           
        </form>
      </div>
      </div>
    </div>
  )
}
