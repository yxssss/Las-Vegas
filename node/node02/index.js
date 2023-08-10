const fs = require('fs')

// fs.writeFile("node02.txt","这是day02",(err) => {
//     console.log(err);
// })

// fs.appendFile("node02.txt","这是day02新增",(err) => {
//     console.log(err);
// })

// fs.readFile("node02.txt","utf8",(err,data) => {
//     console.log(err);
//     console.log(data);
//     console.log(data.toString('utf-8'));
// })

// fs.unlink("node02.txt",(err) => {
//     console.log(err);
// })

const qs = require('querystring')

let obj = {
    name:11111,
    age:3333,
    sex:1,
    mark:199999
}
let string = qs.stringify(obj,"\n",":")
console.log(string);

let newObj = qs.parse(string,"\n",':')
console.log(newObj)


// if(req.body.__proto__===undefined)Object.setPrototypeOf(req.body, new Object());


// const name = "功能强大的查询字符串"
// const escapes = qs.escape(name)
const name = "%E5%8A%9F%E8%83%BD%E5%BC%BA%E5%A4%A7%E7%9A%84%E6%9F%A5%E8%AF%A2%E5%AD%97%E7%AC%A6%E4%B8%B2"
const escapes = qs.unescape(name)
console.log(escapes);
