import * as Yup from 'yup';
export const CategorySchemaCreate = Yup.object({
  name_ar: Yup.string().required('arabic name is required'),
  name_en: Yup.string().required('english name is required'),
})
export const CategorySchemaEdit = Yup.object({
  name: Yup.string().required('name is required'),
})