let express=require('express')
let router=express.Router()
let clientController=require('../controller/clientController')
let uploads=require('../multer.js')

router.post('/clientDataSave',uploads.single('image'),clientController.clientDataSave)

router.post('/clientGetData',clientController.clientGetData)


module.exports=router