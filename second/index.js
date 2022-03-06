const express = require("express")
const app = express()
app.get("/books",function(req,res){
    res.send({
        first:"Atomic Habits",
        second:"Phycology of money",
        Third:"Do epic shit",
        fourth:"Rich dad poor dad"
    })
})
app.listen(4000,()=>{
    console.log("Listing to 4000 port")
})