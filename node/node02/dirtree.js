const fs = require('fs')

//创建一个txt
fs.writeFile('dirtree.txt',"",(err) => {
    console.log(err);
})

//遍历文件夹
fs.readdir('../../node',(err,data) => {
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        const url1 = '../'+element
        fs.stat(url1,(err,stats) => {
            if (!stats.isFile()) {
                fs.appendFile('dirtree.txt','\n'+element,(err) => {
                    console.log(err);
                })
               fs.readdir(url1,(err1,data1) => {
                for (let index = 0; index < data1.length; index++) {
                    const element2 = data1[index];
                    const url2 = url1 + '/' + element2
                    fs.appendFile('dirtree.txt','\n -'+element2,(err) => {
                        console.log(err);
                    })
                    fs.stat(url2,((err,stat2)=> {
                        if (!stat2.isFile()) {
                            fs.readdir(url2,(err,data2)=> {
                                for (let index = 0; index < data2.length; index++) {
                                    const element3 = data2[index];
                                    fs.appendFile('dirtree.txt','\n --'+element3,(err) => {
                                        console.log(err);
                                    })
                                }
                            })
                        }
                    }))
                }
               })
            }else {
                fs.appendFile('dirtree.txt','\n'+element,(err) => {
                    console.log(err);
                })
            }
        })
    }
})