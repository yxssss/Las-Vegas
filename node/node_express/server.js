// const cheerio = require("cheerio")
// console.log(cheerio);

const express = require("express")
const app = express()

app.get('/user/login',(req,res)=> {
    console.log(req.query);
    let {user, pas} = req.query
    if (user === 'yang' && pas === '123456') {
        // http://localhost:3000/user/login?user=yang&pas=123456
        res.send("注册成功")
    }else {
        res.send("失败")
    }
    console.log("susses");
})

app.post('/user/reg',(req,res)=> {
    console.log(req.body);
    
})

app.listen("3000",()=> {
    // 监听 3000 端口  开启服务器
    console.log("express start");
})

// http://localhost:3000/user/login
// http://192.168.9.10:3000/user/login
// 192.168.9.10