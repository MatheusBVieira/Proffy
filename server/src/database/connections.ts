import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: '5689',
        database: 'proffy'
    }
});

export default db;