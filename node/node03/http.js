const http = require('http')

let url = "http://www.bilibili.com/"

http.get(url,(res) => {


    res.on('data',(data) => {
        console.log(data);
        let text = data.toString('utf-8')
        console.log(text);
    })

    res.on('end',() => {
        console.log('end');
    })
})