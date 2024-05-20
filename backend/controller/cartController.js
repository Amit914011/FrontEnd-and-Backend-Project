const db=require('../databaseConfig')

exports.cartSavdata=(req,res)=>{
    let productName=req.body.productName
    let productType=req.body.productType
    let productPrice=req.body.productPrice
    let productRating=req.body.productRating
    let image=req.body.image
    let value=[[productName,productType,productPrice,productRating,image]]
    let sql = 'insert into addCart(productName,productType,productPrice,productRating,image) values ?'
    db.query(sql,[value,(err,result)=>{
        if(err) throw err
        else{
            res.send('Data Saved')
        }
    }]) 
}

exports.cartGetData=(req,res)=>{
    let sql='select * from addCart'
    db.query(sql,(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

exports.cartDeleteData=(req,res)=>{
    let id = req.params.id
    let sql='delete from addCart where id=?'
    db.query(sql,[id],(err,result)=>{
        if(err) throw err
        else{
            res.send('Data Deleted')
        }
    })
}