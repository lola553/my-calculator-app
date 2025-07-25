import mysql from "mysql2/promise"

let connection

async function connectToDatabase(){
    if (!connection){
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        })
    }
    return connection
}

export  default  connectToDatabase