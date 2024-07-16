
var express=require("express");


const app=express();
const bodyparser=require("body-parser");
const mongoose= require("mongoose");
const stucontroller=require("./controllers/studentController");

app.use(bodyparser.urlencoded({ extended: false}))
app.use(bodyparser.json());
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/crudejs")

app.set("view engine","ejs");

app.use(express.static("public"));
app.get("/", stucontroller.displayHome)
app.get("/home", stucontroller.displayHome)
app.get("/insert", stucontroller.insertData)
app.get("/display", stucontroller.displayData)
app.post("/datasave",stucontroller.studentsave)
app.get("/update", stucontroller.updateData)


app.listen(7000,()=>{
    console.log("app run on port :7000")
})
