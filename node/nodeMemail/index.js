let nodemailer = require("nodemailer")

//创建一个发送邮箱的对象

let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com"',
    port: 465,
    secure:true,
    auth: {
        user: "1041862673@qq.com",
        pass: "testAccount.pass"
    }
})

//邮件信息

let mailobj = {
    from: '"Fred Foo"<foo@example.com>',
    to: 'bar@example.com, baz@example.com',
    subjuct: 'Hello',
    text: 'Hello world?',
    // html: '<b>Hello world?</b>',
}

//发送邮件
// transporter.sendMail(mailobj)

//封装一个自定义模块，向固定的邮箱发送固定的信息

let sendMails = {
    mailobjs:{...mailobj},
    pushMail(e,a) {
        sendMails.mailobjs.to = e
        sendMails.mailobjs.text = a
        // transporter.sendMail(mailobjs)
        console.log(sendMails);
    }
}

module.exports = sendMails
