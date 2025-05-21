import Joi from 'joi';
const studentNameJoiSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .required()
    .custom((value, helpers) => {
      const capitalized =
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      if (value !== capitalized) {
        return helpers.error('any.invalid');
      }
      return value;
    })
    .messages({
      'any.required': 'First Name is required',
      'any.invalid': 'First Name must be capitalized',
      'string.max': 'Name can not be more than 20 char',
    }),
  middleName: Joi.string().trim().optional(),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[A-Za-z]+$/)
    .messages({
      'any.required': 'Last Name is required',
      'string.pattern.base': 'Last Name is not valid',
    }),
});

const guardianJoiSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'any.required': 'Father Name is required',
  }),
  fatherOccupation: Joi.string().required().messages({
    'any.required': 'Father Occupation is required',
  }),
  fatherContactNo: Joi.string().required().messages({
    'any.required': 'Father Contact Number is required',
  }),
  motherName: Joi.string().required().messages({
    'any.required': 'Mother Name is required',
  }),
  motherOccupation: Joi.string().required().messages({
    'any.required': 'Mother Occupation is required',
  }),
  motherContactNo: Joi.string().required().messages({
    'any.required': 'Mother Contact Number is required',
  }),
});

const localGuardianJoiSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Local Guardian Name is required',
  }),
  occupation: Joi.string().required().messages({
    'any.required': 'Local Guardian Occupation is required',
  }),
  contactNo: Joi.string().required().messages({
    'any.required': 'Local Guardian Contact Number is required',
  }),
  address: Joi.string().required().messages({
    'any.required': 'Local Guardian Address is required',
  }),
});

const studentJoiSchema = Joi.object({
  id: Joi.string().required().messages({
    'any.required': 'ID is required',
  }),
  name: studentNameJoiSchema.required().messages({
    'any.required': 'Name is required',
  }),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only': 'Gender must be male, female, or other',
    'any.required': 'Gender is required',
  }),
  dateOfBirth: Joi.string().optional(),
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.email': 'Email is not valid',
  }),
  contactNo: Joi.string().required().messages({
    'any.required': 'Contact Number is required',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'any.required': 'Emergency Contact Number is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .messages({
      'any.only': 'Blood group is not valid',
    }),
  presentAddress: Joi.string().required().messages({
    'any.required': 'Present Address is required',
  }),
  permanentAddress: Joi.string().required().messages({
    'any.required': 'Permanent Address is required',
  }),
  guardian: guardianJoiSchema.required().messages({
    'any.required': 'Guardian information is required',
  }),
  localGuardian: localGuardianJoiSchema.required().messages({
    'any.required': 'Local Guardian information is required',
  }),
  profileImg: Joi.string().required().messages({
    'any.required': 'Profile Image is required',
  }),
  isActive: Joi.string().valid('active', 'blocked').default('active').messages({
    'any.only': 'isActive must be either active or blocked',
  }),
});

export default studentJoiSchema;
