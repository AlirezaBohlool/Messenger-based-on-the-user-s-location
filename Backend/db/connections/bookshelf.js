const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_NAME, MYSQL_PORT } = process.env;
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_NAME,
        port: MYSQL_PORT,
        charset: 'utf8'
    }
});
const bookshelf = require('bookshelf')(knex);
module.exports = bookshelf;