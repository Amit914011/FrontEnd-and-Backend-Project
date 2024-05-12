const express=require('express')
const router=express.Router()
const controller=require('../controller/productController')
const uploads=require('../multer.js')

router.post('/saveData',uploads.single('image'),controller.savdata)

router.get('/getData',controller.getData)

router.get('/viewData/:id',controller.viewData)

router.delete('/deleteData/:id',controller.deleteData)

router.put('/updateData/:id',controller.updateData)

router.get('/searchProduct/:inp',controller.searchProduct)

module.exports=router