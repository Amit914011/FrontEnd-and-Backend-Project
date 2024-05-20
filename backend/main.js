const express=require('express')
const cors=require('cors')
const db=require('./databaseConfig')
const route=require('./router/productRouter')
const adminRoute=require('./router/adminRoute')
const cartRoute=require('./router/cartRoute')
const clientRoute=require('./router/clientRoute')

let app=express()
app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))

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
    image varchar(255) null,
    primary key(id)
)
 `
db.query(creattable,(err,result)=>{
    if(err) throw err
    else{
        console.log('Table Successful Create')
    }
})

let cartTable=`
create table if not exists addCart(
    id int not null auto_increment,
    productName varchar(255) null,
    productType varchar(255) null,
    productPrice varchar(255) null,
    productRating varchar(50) null,
    image varchar(255) null,
    primary key(id)
)
 `
db.query(cartTable,(err,result)=>{
    if(err) throw err
    else{
        console.log('Cart Table Successful Create')
    }
})

let signupTable=`
create table if not exists signupData(
    id int not null auto_increment,
    userName varchar(255) null,
    emailAddress varchar(255) null,
    password varchar(255) null,
    image varchar(255) null,
    primary key(id)
)
`
db.query(signupTable,(err,result)=>{
    if(err) throw err
    else{
        console.log('Create signup Table Successful')
    }
})

app.use('/api',route)
app.use('/api',adminRoute)
app.use('/api',cartRoute)
app.use('/api',clientRoute)


app.listen(3000,()=>{
    console.log('Server is Runing on 3000')
})