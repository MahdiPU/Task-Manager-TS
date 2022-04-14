import express, { Request, Response, NextFunction } from "express";
import { json, urlencoded } from 'body-parser'
import {connectDB} from './services/connect' 
import tasks from './routes/tasks'
import dotenv from 'dotenv'
dotenv.config();
const app = express()
app.use(json())
app.use('/',tasks)
const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI as string);
      app.listen(3000, () =>
        console.log(`Server is listening on port 3000...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();