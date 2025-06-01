import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import sendRsponse from '../../utils/sendResponse';
import status from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    //data validation using zod
    // const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await UserService.createStudentIntoDB(password, studentData);

    sendRsponse(res, {
      status: status.OK,
      success: true,
      message: 'Student is created Successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
