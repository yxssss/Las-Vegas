const fs = require('fs')

fs.readdir('./',(err,data) => {
    console.log(err);
    console.log(data);
})

// function callback(err,data) {
// console.log(err);
// console.log(data);
// }