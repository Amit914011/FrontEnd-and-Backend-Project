const express=require('express')
const router=express.Router()
const cartController=require('../controller/cartController')
const uploads=require('../multer.js')

router.post('/cartSaveData',uploads.single('image'),cartController.cartSavdata)
router.get('/cartGetData',cartController.cartGetData)
router.delete('/cartDeleteData/:id',cartController.cartDeleteData)


module.exports=router