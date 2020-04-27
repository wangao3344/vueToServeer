const express = require('express');
const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'post,get')
        // 允许客户端发送跨域请求时携带cookie信息
    res.header('Access-Control-Allow-Credentials', true);
    // 设置报文头的格式 跨域post请求 携带的json
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");

    next();
});
// 注册一级路由
app.use('/admin', require('./route/admin'));
app.listen(80);
console.log('服务器开启成功。。。。。。');