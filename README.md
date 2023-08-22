### node学习记录

##### 内部API
###### -----------day1----------------
    + readdir() 读取文件列表
    + mkdir() 创建文件  只有err
    + rename() 修改文件
    + rmdir() 删除文件  只能删除空文件



###### -----------day2----------------
    +  writeFile() 创建文件 覆盖写入
    +  appendFile() 写入文件 
    +  readFile() 读取文件
    +  unlink() 删除文件
    +  stat() 查看文件类型
    +  url.parse()
    +  querystring.parse()
    +  querystring.escape() 编码 unescape() 解码

#### 邮箱验证码案例
+  nodemailer 可以实现发送邮件
+  封装一个发送邮件(传参邮箱+text)



###### -----------day3----------------
#### 简易爬虫
+  http
+  cheerio  //引入jq写法



###### -----------day4----------------

### Express

####  通过express 框架 书写api
+ 什么是API
##### 登陆接口逻辑分析
 1. 接受数据
 2. 处理数据
 3. 返回数据

##### 使用express
 1. 安装express
 ```
 模块的引用，从当前目录的node_modules向上寻找
 ```

##### 服务器相关

####  非关系行数据库 mongodb