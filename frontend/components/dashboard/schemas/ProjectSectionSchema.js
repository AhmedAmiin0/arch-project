import * as Yup from 'yup';
export const ProjectSectionSchemaCreate = Yup.object({
  title_ar: Yup.string().required('arabic title is required'),
  title_en: Yup.string().required('english title is required'),
  subtitle_ar: Yup.string().required('arabic subtitle is required'),
  subtitle_en: Yup.string().required('english subtitle is required'),
  description_ar: Yup.string().required('arabic description is required'),
  description_en: Yup.string().required('english description is required'),
  section_photo: Yup.mixed().test('fileType', 'Unsupported File Format', function (value) {
    const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp'];
    if (value) {
      return SUPPORTED_FORMATS.includes(value.type);
    }
    return true;
  }
  ),

})
export const ProjectSectionSchemaEdit = Yup.object({
  title: Yup.string().required('title is required'),
  subtitle: Yup.string().required('subtitle is required'),
  description: Yup.string().required('description is required'),
})