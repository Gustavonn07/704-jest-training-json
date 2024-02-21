const mysql = require('mysql2/promise');

async function execute(sql) {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '17301638',
        database: 'jest704',
        port: 3306
    });

    const [result] = await connection.query(sql);
    return result;
}

module.exports = {
    execute
};