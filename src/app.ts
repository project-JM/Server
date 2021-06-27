import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { createConnection } from 'typeorm';

import { User } from './entity/User';

// * typeORM과 연결
createConnection()
  .then(connection => {
    const userRepository = connection.getRepository(User);

    console.log('DB connected');
  })
  .catch(error => console.log(error));

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
