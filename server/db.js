const   Pool = require("pg").Pool ; 

const pool = new Pool ({
    type: "postgres", 
    port:  5432,
    host: "localhost",
    database:"postgres" ,  
    user:"postgres", 
    password:"ghada"

}); 

 module.exports = pool ;   
