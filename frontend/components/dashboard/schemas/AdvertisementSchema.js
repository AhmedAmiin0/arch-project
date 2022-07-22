import * as Yup from "yup";
export const AdvertisementSchemaCreate = Yup.object({
  title: Yup.string().required("title is required"),
  message: Yup.string().required("message is required"),
  subject: Yup.string().required("subject is required"),
});
