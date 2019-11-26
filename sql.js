const mysql = require('mysql')
const pool = mysql.createPool({
    host: "122.51.148.149",
    user: "cxzz_top",
    password:"Arch.123",
    database: "cxzz_top"
})
let query = function( sql, values ) {
    // 返回一个 Promise
    return new Promise(( resolve, reject ) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject( err )
        } else {
          connection.query(sql, values, ( err, rows) => {
            if ( err ) {
              reject( err )
            } else {
              resolve( rows )
            }
            // 结束会话
            connection.release()
          })
        }
      })
    })
  }
  module.exports =  query