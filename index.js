const express=require('express')
const path=require('path')
const app=new express()

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.listen(3000,(req,res)=>{
  console.log("Connected Successfully..on port number :3000");
  
})
app.get('/register',(req,res)=>{
  res.render('register')
})

app.post('/register',(req,res)=>{
  const {fname,lname,uname,email}=req.body
  console.log(`First Name is:${fname} ,Last name is:${lname}, User Name is:${uname}, And email id is:${email}`);

  res.send("Form data submitted Successfully...")
  
})