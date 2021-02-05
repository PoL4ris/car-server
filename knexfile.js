// Update with your config settings.
require("dotenv").config();

module.exports = {

    development: {
        client: 'pg',
        connection: {
          host : '127.0.0.1',
          user : 'postgres',
          password : 'LasVegas2021$',
          database : 'car_service_db',
          charset: 'utf8'
        },
        migrations: {
          directory: './knex/migrations',
        },
        seeds: {
          directory: './knex/seeds'
        }
      },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    //  pool: {	
    //   min: 2,	
    //   max: 10	
    // },
    // ssl: true,
    pool: { min: 0, max: 50 },
    migrations: {
        directory:'./knex/migrations',
    },
    seeds: {
        directory:'./knex/seeds',
    },
  }

};
