import * as Yup from 'yup';

export const ServicesSchemaCreate = Yup.object({
  title_en: Yup.string().required('english title field is required'),
  title_ar: Yup.string().required('arabic title field is required'),
  subtitle_en: Yup.string().required('english subtitle field is required'),
  subtitle_ar: Yup.string().required('arabic subtitle field is required'),
  description_en: Yup.string().required('english description field is required'),
  description_ar: Yup.string().required('arabic description field is required'),
  excerpt_en: Yup.string().required('english excerpt field is required'),
  excerpt_ar: Yup.string().required('arabic excerpt field is required'),
  service_thumb: Yup.mixed()
    .test('fileType', 'Unsupported File Format', function (value) {
      const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp'];
      if (value) {
        return SUPPORTED_FORMATS.includes(value.type);
      }
      return true;
    })
});
export const ServicesSchemaEdit = Yup.object({
  title: Yup.string().required('title field is required'),
  subtitle: Yup.string().required('subtitle field is required'),
  description: Yup.string().required('description field is required'),
  excerpt: Yup.string().required('excerpt field is required'),
})
