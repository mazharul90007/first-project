import { z } from 'zod';
const userValidationSchema = z.object({
  id: z.string(),
  passowrd: z
    .string()
    .max(20, { message: 'Password can not be more than 20 character' }),
  needsPasswordChange: z.boolean().optional().default(true),
  role: z.enum(['admin', 'student', 'faculty']),
  status: z.enum(['inProgress', 'blocked']).default('inProgress'),
  isDeleted: z.boolean().optional().default(false),
});

export const userValidation = {
  userValidationSchema,
};
