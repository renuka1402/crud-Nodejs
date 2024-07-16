

const stuModel=require("../models/studentModel");


const displayHome=(req,res)=>{
    res.render("home")
}
const insertData=(req,res)=>{
    res.render("insert")
}
const displayData=(req,res)=>{
    stuModel.find().then((data)=>{
        res.render("display",{mydata:data}) 
    })
}
const studentsave=(req,res)=>{
    let sturoll=req.body.rn;
    let stuname=req.body.nm;
    let stucity=req.body.ct;
    let stufees=req.body.fs;
    


    const student=new stuModel({
        rollno: sturoll,
        name: stuname,
        city:stucity,
        fees:stufees


    })
    student.save();
    stuModel.find().then((data)=>{
        res.render("display",{mydata:data}) 
    })
    
}
const updateData=(req,res)=>{
    stuModel.find().then((data)=>{
        res.render("update",{mydata:data}) 
    })
  
}
module.exports={
    displayHome,
    insertData,
    displayData,
    studentsave,
    updateData
}
