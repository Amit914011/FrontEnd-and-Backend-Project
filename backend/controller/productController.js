const db=require('../databaseConfig')

exports.savdata=(req,res)=>{
    let productName=req.body.productName
    let productType=req.body.productType
    let productPrice=req.body.productPrice
    let productRating=req.body.productRating
    let image=req.file.filename
    let value=[[productName,productType,productPrice,productRating,image]]
    let sql = 'insert into product(productName,productType,productPrice,productRating,image) values ?'
    db.query(sql,[value,(err,result)=>{
        if(err) throw err
        else{
            res.send('Data Saved')
        }
    }]) 
}

exports.getData=(req,res)=>{
    let sql='select * from product'
    db.query(sql,(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

exports.deleteData=(req,res)=>{
    let id = req.params.id
    let sql='delete from product where id=?'
    db.query(sql,[id],(err,result)=>{
        if(err) throw err
        else{
            res.send('Data Delete Successful')
        }
    })
}

exports.viewData=(req,res)=>{
    let id=req.params.id
    let sql =' select * from product where id=?'
    db.query(sql,[id],(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

exports.updateData=(req,res)=>{
    let id=req.params.id
    let newData=req.body
    let sql='update product set ? where id=?'
    db.query(sql,[newData,id],(err,result)=>{
        if(err) throw err
        else{
            res.send('Data Updated')
        }
    })
}
exports.searchProduct=(req,res)=>{
    let inp=req.params.inp
    let sql='select * from product where productName like ?'
    db.query(sql,["%"+inp+"%"],(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}