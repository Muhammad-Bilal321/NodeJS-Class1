let http = require("http")

let bookData = [
"Urdu",
"english",
"Math",
"Computer",
"Physics"
]

// const server = http.createServer((req,res)=>{
//     if(req.url == '/bookData'){
//         console.log("/ Request")
//         res.write(JSON.stringify(bookData))
//     }
//     res.end();
// })

// server.listen(4000)
// const server = http.createServer((req,res)=>{
//     if(req.url == "/"){
//         console.log("/ Request")
//         res.write(bookData)    }
//     res.end();
// })

// server.listen(4000)

const express = require("express");

const App = express();
App.get("/bookData", (req, res)=>{
    res.send(bookData);
})

App.listen(4000, ()=>{
    console.log("Server is on http://localhost:4000/")
})