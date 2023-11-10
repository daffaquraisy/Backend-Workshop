import "reflect-metadata";
import express from "express";
import { dataSource } from './typeorm.config';
import * as bodyParser from 'body-parser';
import cors from 'cors'

import dotenv from 'dotenv'

dotenv.config()

const boot = async () => {
  const corsOptions = {
    origin: [
      "http://localhost:5173",
    ],
  };

  await dataSource.initialize()

  const app = express();

  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  require("./routes/function.routes")(app);

  app.listen(7001, async () => {
    console.log(`Server start at port http://localhost:7001`)
  });
};

boot().catch(err => console.log(err));
