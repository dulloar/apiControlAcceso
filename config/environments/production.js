module.exports = {
    PORT: process.env.PORT,
    DB: {
        user : "postgres",
        password : "123456",//process.env.DB_PASSWORD
        databse : "formularios",
        host : "localhost",//process.env.HOST
        dialect : "postgres"
    }
};