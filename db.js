
const mongoose =require("mongoose")
const Schema=mongoose.Schema
const ObjectId=Schema.ObjectId

const user=new Schema({
    roll: {type:String,unique:true},
    email:String,
    password:String,
    firstname:String,
    lastname:String
    
})
const admin=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
})
const book=new Schema({
    title:String,
    author:String,
    isbn:Number,
    category:String,
    price:Number,
    status:String,
    imageurl:String,
    creatorid:ObjectId
})
const issued=new Schema({
    userid:ObjectId,
    bookid:ObjectId,
    fine:Number
})

const usermodel=mongoose.model("user",user);
const adminmodel=mongoose.model("admin",admin);
const bookmodel=mongoose.model("book",book);
const issuedmodel=mongoose.model("issued",issued);

module.exports={
    usermodel,
    adminmodel,
    bookmodel,
    issuedmodel
}



