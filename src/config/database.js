import Sequelize from 'sequelize';

export const db = new Sequelize(
    'postgres',
    'postgres',
    '12345',
    {
        database: 'ciclyshopof',
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)