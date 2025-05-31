/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlwares/globalErrorHandler';
const app: Application = express();
// const port = 3000

//parsers
app.use(express.json());
app.use(cors());

//application routes
// app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', getAController);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(globalErrorHandler);
export default app;
