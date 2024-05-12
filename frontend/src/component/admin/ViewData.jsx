import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewData() {
    let [view,setView]=useState([])

    let {id}=useParams()

    async function getData(){
        let result = await axios.get(`http://localhost:3000/api/viewData/${id}`)
        setView(result.data)
    }

    useEffect(()=>{
        getData()
    },[view])

  return (
    <div className='w-full flex justify-center mt-5'>
     {
        view.map((data)=>(
            <div>
        <h1 className='font-bold text-2xl'>View Data</h1>
        <p>Product Name :- {data.productName}</p>
        <p>Product Type :- {data.productType}</p>
        <p>Product Price :- {data.productPrice}</p>
        <p>Product Rating :- {data.productRating}</p><br />
        <Link to='/admin' className='px-5 py-1 bg-indigo-700 text-white font-bold text-1xl rounded-md hover:bg-red-600'>Home</Link>
     </div>
        ))
     }
    </div>
  )
}
