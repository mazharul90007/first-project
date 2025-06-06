import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  //create a user object
  const userdata: Partial<TUser> = {};

  //if password is not given, use default password
  userdata.password = password || (config.default_pass as string);

  //set student role
  userdata.role = 'student';

  //set manually generated id
  userdata.id = '2030100001';

  //create a user
  const newUser = await User.create(userdata);

  //create a student
  if (Object.keys(newUser).length) {
    //set id, _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; //reference _id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserService = {
  createStudentIntoDB,
};
