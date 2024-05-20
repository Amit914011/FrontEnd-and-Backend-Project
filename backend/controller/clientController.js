const db =require('../databaseConfig')


exports.clientDataSave=(req,res)=>{
    let userName=req.body.userName
    let emailAddress=req.body.emailAddress
    let password=req.body.password
    let image = req.file.filename
    let value = [[userName,emailAddress,password,image]]
    let sql = 'insert into signupData(userName,emailAddress,password,image) values ?'
    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
            res.send('Submit Data')
        }
    })
}

exports.clientGetData=(req,res)=>{
    let emailAddress=req.body.emailAddress
    let password=req.body.password
    let sql='select * from signupData where emailAddress = ? and password = ?'
    db.query(sql,[emailAddress,password],(err,result)=>{
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