const mongoose=require("mongoose")




const productSchema=mongoose.Schema({
    prodHighlights:String,
    longDesc:String,
    imageUrl:String,
    productName:String,
    shortDesc:String,
    ratings:Number,
    numberOfRatings:String,
    strikedPrice:String,
    price:Number,
    discount:Number,
    brand:String

})

const Prod=mongoose.model("tataprod",productSchema)


module.exports=Prod