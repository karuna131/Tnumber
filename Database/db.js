const knex = require('knex')({
    client : 'mysql',
    connection :{
        host : 'localhost',
        user : 'root',
        password : 'Kavi@123',
        database : 'Tnumber'
    }
});


//SignUp
knex.schema.hasTable('Signup').then((exists) =>{
    if (!exists) {
      return knex.schema.createTable('Signup', (table) =>{
        table.increments('id').primary();
        table.string('email').notNullable().unique();
        table.string('password');
      });
    }
});


module.exports = knex;