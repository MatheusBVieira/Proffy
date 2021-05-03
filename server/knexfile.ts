import path from 'path';

module.exports = {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: '5689',
        database: 'proffy'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },

}