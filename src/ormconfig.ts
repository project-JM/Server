import dotenv from 'dotenv';
dotenv.config();

export default {
  type: 'mysql',
  host: 'localhost',
  port: process.env.PORT,
  username: 'root',
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: ['src/entity/*.js'],
  logging: true,
  synchronize: true,
};
