import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddProduct() {
    // let [data,setData]= useState({
    //     productName:'',
    //     productType:'',
    //     productPrice:'',
    //     productRating:''
    // })
    // let {productName,productType,productPrice,productRating}=data

    // function handleChange(e){
    //     setData({...data,[e.target.name]:e.target.value})
    // }

    // async function handleSubmit(){
    //     await axios.post('http://localhost:3000/api/saveData',data)
    // }
    let navigation=useNavigate()
    let [productName,setProductName]=useState('')
    let [productType,setProductType]=useState('')
    let [productPrice,setProductPrice]=useState('')
    let [producPrice,setProductRating]=useState('')
    let [image,setImage]=useState(null)

    async function handleSubmit(e){
      let product=new FormData()
      product.append('productName',productName)
      product.append('productType',productType)
      product.append('productPrice',productPrice)
      product.append('producPrice',producPrice)
      product.append('image',image)
      await axios.post('http://localhost:3000/api/saveData',product,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      })
      navigation('/admin')
    }
  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <div>
        <h1 className='text-5xl font-bold mb-3'>Add Product Form</h1>
        <form action="" method="post">
            <label htmlFor="">Product Name</label><br />
            <input className='border w-[250px] px-1 rounded-md mb-2' type="text" placeholder='Enter Your Product Name' name="productName"
             onChange={(e)=>setProductName(e.target.value)} 
             /><br />
            <label htmlFor="">Product Type</label><br />
            <input className='border w-[250px] px-1 rounded-md mb-2' type="text" placeholder='Enter Your Product Type' name="productType" onChange={(e)=>setProductType(e.target.value)}  /><br />
            <label htmlFor="">Product Price</label><br />
            <input className='border w-[250px] px-1 rounded-md mb-2' type="text" placeholder='Enter Your Product Price' name="productPrice" onChange={(e)=>setProductPrice(e.target.value)}  /><br />
            <label htmlFor="">Product Rating</label><br />
            <input className='border w-[250px] px-1 rounded-md mb-2' type="text" placeholder='Enter Your Product Rating' name="productRating" onChange={(e)=>setProductRating(e.target.value)}  /><br />
            <input className='border w-[250px] px-1 rounded-md mb-2' type="file" placeholder='Enter Your Product Rating' name="image" onChange={(e)=>setImage(e.target.files[0])}  /><br />
            <Link onClick={handleSubmit} to='/admin' className='bg-green-600 hover:bg-green-500 px-8 rounded-md text-white font-bold text-2xl py-1'>Save</Link>
        </form>
      </div>
    </div>
  )
}
