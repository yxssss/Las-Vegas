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

fs.unlink("node02.txt",(err) => {
    console.log(err);
})