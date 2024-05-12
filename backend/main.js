const express=require('express')
const cors=require('cors')
const db=require('./databaseConfig')
const route=require('./router/productRouter')
const adminRoute=require('./router/adminRoute')

let app=express()
app.use(express.json())
app.use(cors())

db.connect((err)=>{
    if(err) throw err
    else{
        console.log('Database is connected')
    }
})

let creattable=`
create table if not exists product(
    id int not null auto_increment,
    productName varchar(255) null,
    productType varchar(255) null,
    productPrice varchar(255) null,
    productRating varchar(50) null,
    primary key(id)
)
 `
db.query(creattable,(err,result)=>{
    if(err) throw err
    else{
        console.log('Table Successful Create')
    }
})

app.use('/api',route)
app.use('/api',adminRoute)


app.listen(3000,()=>{
    console.log('Server is Runing on 3000')
})