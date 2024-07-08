const express = require("express");

const app=express();
app.use(express.json());
app.use(myMiddleWare);
require("./routs/idea.routs")(app);

/*
Start server*/ 
function myMiddleWare(req,res,next){
    console.log("Inside the middle ware I created");
    next();//It will pass on the control to the next step
}

app.listen(8080,()=>{
    console.log("Server started");
})
