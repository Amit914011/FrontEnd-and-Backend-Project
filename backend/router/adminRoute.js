const express=require('express')
const router=express.Router()
const adminController=require('../controller/adminController')

router.post('/adminLogin',adminController.adminLogin)

module.exports=router