import mysql from "mysql2"

//create connection to database
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"try_FullStack"
})

export default db