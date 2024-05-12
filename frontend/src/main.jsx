import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import TableData from './component/admin/TableData.jsx'
import AddProduct from './component/admin/AddProduct.jsx'
import ViewData from './component/admin/ViewData.jsx'
import UpdateData from './component/admin/UpdateData.jsx'
import Login from './component/admin/Login.jsx'
import Client from './Client.jsx'
import Navbar from './component/client/Navbar.jsx'
import Protected from './component/admin/Protected.jsx'

let router=createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route path='/' element={<Client/>}>
      <Route path='' element={<Navbar/>}/>      
      </Route>
      <Route path='/admin' element={<App/>}>
        <Route path='' element={
          <Protected>
            <TableData/>
          </Protected>
        }/>
        <Route path='/admin/addProduct' element={
          <Protected>
            <AddProduct/>
          </Protected>
        }/>
        <Route path='/admin/viewData/:id' element={<ViewData/>}/>
        <Route path='/admin/updateData/:id' element={<UpdateData/>}/>
        <Route path='/admin/login' element={<Login/>}/>
  
      </Route>
   </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
