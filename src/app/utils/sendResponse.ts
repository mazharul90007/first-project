import { Response } from 'express';

type TResponse<T> = {
  status: number;
  success: boolean;
  message?: string;
  data: T;
};

const sendRsponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.status).json({
    success: data.success,
    messsage: data.message,
    data: data.data,
  });
};

export default sendRsponse;
