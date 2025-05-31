import { z } from 'zod';
const userValidationSchema = z.object({
  passowrd: z
    .string({
      invalid_type_error: 'password must be string',
    })
    .max(20, { message: 'Password can not be more than 20 character' })
    .optional(),
});

export const userValidation = {
  userValidationSchema,
};
