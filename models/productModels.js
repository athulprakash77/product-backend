const Mongoose=require("mongoose")

let pSchema=Mongoose.Schema(
    {

        code:String,
        name:String,
        price:String,
        MnfDate:String,
        WExpDate:String

    }
)

let Pmodel=Mongoose.model("product",pSchema)
module.exports=Pmodel