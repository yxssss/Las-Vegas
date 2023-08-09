const fs = require('fs')

fs.mkdir('./text',(err)=> {
    console.log(err);
})


// fs.rename('./text','./text01',(err)=> {
//     console.log(err);
// })

// fs.rmdir('./text01',(err)=> {
//     console.log(err);
// })