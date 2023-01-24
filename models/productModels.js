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

module.exports=Mongoose.model("product",pSchema)