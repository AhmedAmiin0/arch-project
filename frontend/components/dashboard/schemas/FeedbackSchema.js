import * as Yup from 'yup';
export const FeedbackSchemaCreate = Yup.object({
  name_ar: Yup.string().required('arabic name is required'),
  name_en: Yup.string().required('english name is required'),
  position_ar: Yup.string().required('arabic position is required'),
  position_en: Yup.string().required('english position is required'),
  feedback_ar: Yup.string().required('arabic feedback is required'),
  feedback_en: Yup.string().required('english feedback is required'),
  client_photo: Yup.mixed()
    .test("fileType", "Unsupported File Format", function (value) {
      const SUPPORTED_FORMATS = [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/svg+xml",
        "image/webp",
      ];
      if (value) {
        return SUPPORTED_FORMATS.includes(value.type);
      }
      return true;
    })
    .nullable("optional")
})
export const FeedbackSchemaEdit = Yup.object({
  name: Yup.string().required('name is required'),
  position: Yup.string().required('position is required'),
  feedback: Yup.string().required('feedback is required'),
})