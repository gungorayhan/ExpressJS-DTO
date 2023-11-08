const express= require("express")
const router = require("./router/index");
const apiErrorHandler = require("./error/api-error-handler");
const app= express();

app.use(express.json())

app.use("/",router)

//error
app.use(apiErrorHandler)

app.listen(3000,()=>{
    console.log("Server is running")
})