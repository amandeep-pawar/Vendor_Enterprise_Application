const express= require('express')
const path= require('path')
const restApi= express()

const http= require('http')

const port= 2023

restApi.use(express.static(path.join(__filename,"Navbar.html")))

http.createServer((req,res)=>{
    res.write("<h1>http request is hiting</h1>")
    if(req.url==='/being'){
        res.write("<p>url is hitting</p>")
    }

    res.end()
}).listen(4040,()=>{
    console.log("http hitted.")
})

restApi.get("/being",(req,res)=>{
    res.send("Amandeep Singh is Here!")
})

restApi.get("/about",(req,res)=>{
    res.status(400)
    res.sendFile(path.join(__filename,'../Navbar.html'))
    
})


restApi.listen(port,()=>{
    console.log("Endpoints has been started...")
})