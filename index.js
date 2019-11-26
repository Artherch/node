'use strict';
// const query = require('./sql') 
// var connect = ()=>{
//     return new Promise((resolve,reject)=>{
//         let data;
//         var sql = 'SELECT * FROM webTest';
//         // var  addSql = 'INSERT INTO webTest(name,age,adress,color) VALUES(?,?,?,?)';
//         // var  addSqlParams = ['菜鸟工具', 123,'23453', 'CN'];
        
//         // var modSql = 'UPDATE webTest SET name = ? WHERE Id = ?';
//         // var modSqlParams = ['菜鸟移动站',6];
        
//         // var delSql = 'DELETE FROM webTest where id=4';
//         connection.query( sql, function (error, results, fields) {
//             if (error) throw error;
//             results = JSON.stringify(results);
//             results = JSON.parse(results);
//             data = results
//             resolve(data)
//         });
//         connection.end();
//     })
// }

let express = require('express');
let app = express();
//设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://test.test.com:8080');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next()
});


let api = '/api/user';
app.get(api, async(req, res) => {
    // const data = await query('SELECT * FROM webTest');
    // res.send(data);
    res.send('111111111111111112222');
});

//配置服务端口
var server = app.listen(8000, () => {
    console.log( `localhost:8000${api}`);
});


// const express = require('express')
// const app = express()
// app.listen(5000, ()=>{
//     console.log('http://127.0.0.1:5000')
// }) 
// app.get('/api/gethero',(req,res) => {
//     const id = req.query.id
//     const sqlStr = 'select * from text where id = ?' 
//     conn.query(sqlStr,id,(err,results) => {
//         if(err) return res.json({err_code:1,message:'获取数据失败',affectedRows:0})
//         if(results.length !== 1) return res.json({err_code:1,message:'数据不存在',affectedRows:0})
//         res.json({
//             err_code:0,
//             message:results[0],
//             affectedRows:0
//         })
//     })
// })