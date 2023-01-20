const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")
const Pmodel=require("./models/productModels")

var product=Express()
product.use(Bodyparser.json())
product.use(Bodyparser.urlencoded({extended:true}))


product.get("/",(req,res)=>{
res.send("welcome")
})


product.post("/add",(req,res)=>{
    let data=new Pmodel(req.body)
    console.log(data)
    res.send("add product")
    })



product.listen(1001)