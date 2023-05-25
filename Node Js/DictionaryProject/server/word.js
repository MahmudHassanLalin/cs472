var mySql = require('mysql2');

const con = mySql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'MySql1%$'
});
con.connect();
const searchWord=async(word)=>{
    
    const result=await searchDbWord(word);
    return result;
}
function searchDbWord(word) {
    return new Promise((resolve, reject) => {
        con.query(`select  * from entries.entries where lower(word)='${String(word).toLowerCase()}'`, (err, result) => {
            return err?reject(err):resolve(result);
        });
    });
}
exports.searchWord = searchWord;