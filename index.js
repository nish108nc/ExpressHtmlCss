const express=require('express')
const mongoose=require('mongoose')
const path=require('path')
const app=new express()
const User=require('./models/User')

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))


app.listen(3000,(req,res)=>{
  console.log("Connected Successfully..on port number :3000");
  
})

//Conntion with MongoDb
mongoose.connect('mongodb://127.0.0.1:27017/KumarDb',{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>console.log("MongoDb Connected..."))
  .catch(err=>console.log("connection Error",err))

//Routing
app.get('/register',(req,res)=>{
  res.render('register')
})

app.post('/register',async(req,res)=>{
  try{
 const {fname,lname,uname,email}=req.body
 const user=new User({fname,lname,uname,email})
 await user.save()
 res.send("Data hv been stored in MongoDB...")
  }
  catch(err){
    res.status(500).send("Server Error..")
  }
 

  

  res.send("Form data submitted Successfully...")
  
})