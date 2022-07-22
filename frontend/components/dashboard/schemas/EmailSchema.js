import * as Yup from 'yup';
export const EmailSchemaCreate = Yup.object({
  email: Yup.string().required('email is required'),
})