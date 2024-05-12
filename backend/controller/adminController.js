const db=require('../databaseConfig')

exports.adminLogin=(req,res)=>{
    let userName=req.body.userName
    let password=req.body.password
    let sql='select * from adminLogin where userName=? and password=?'
    db.query(sql,[userName,password],(err,result)=>{
        if(err) throw err
        else{
           if(result.length>0){
            res.send(true)
           }else{
            res.send(false)
           }
        }
    })
}