// const cheerio = require("cheerio")
// console.log(cheerio);

const express = require("express")
const app = express()

app.get('/user/login',(req,res)=> {
    console.log("susses");
    res.send("注册成功")
})


app.listen("3000",()=> {
    // 监听 3000 端口  开启服务器
    console.log("express start");
})

// http://localhost:3000/user/login