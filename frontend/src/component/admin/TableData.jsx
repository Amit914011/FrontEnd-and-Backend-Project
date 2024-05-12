import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function TableData() {
    let [data,setData]=useState([])
    async function getData(){
        let result = await axios.get('http://localhost:3000/api/getData')
        setData(result.data)
    }
    useEffect(()=>{
        getData()
    },[data])

    function deleteData(id){
        // console.log(id)
        axios.delete(`http://localhost:3000/api/deleteData/${id}`)
        getData()
    }
  return (
    <div>
      <div className='w-full px-10'>
        <table className='w-full'>
            <tr className='border-collapse border border-black'>
                <th>Product Name</th>
                <th>Product Type</th>
                <th>Product Price</th>
                <th>Product Rating</th>
                <th>Edit</th>
            </tr>
            {
                data.map((data)=>(
                    <tr className='text-center'>
                        <td className='border border-black '>{data.productName}</td>
                        <td className='border border-black '>{data.productType}</td>
                        <td className='border border-black '>{data.productPrice}</td>
                        <td className='border border-black '>{data.productRating}</td>
                        <td className='border border-black w-[350px]'>
                            <Link to={`/admin/viewData/${data.id}`} className='px-2 mx-1 py-1 bg-blue-800 rounded-md text-white font-bold'>ViewData</Link>
                            <button onClick={()=>deleteData(data.id)} className='px-2 mx-1 py-1 bg-red-600 rounded-md text-white font-bold'>Delete Data</button>
                            <Link to={`/admin/updateData/${data.id}`} className='px-2 mx-1 py-1 bg-yellow-500 rounded-md text-white font-bold'>Update Data</Link>
                        </td>
                    </tr>
                ))
            }
        </table>
      </div>
    </div>
  )
}
