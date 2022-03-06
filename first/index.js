const express = require("express")

const app = express()

app.get("/users",function(req,res){
    res.send("hello")
})
app.listen(5000,()=>{
    console.log("listing to port 5000")
})