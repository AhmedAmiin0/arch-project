import * as Yup from "yup";
export const UserSchemaCreate = Yup.object({
  name: Yup.string().required("name is required"),
  email: Yup.string().required("email is required"),
  password: Yup.string().required("password is required"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("password confirmation is required"),
  avatar: Yup.mixed().test(
    "fileType",
    "Unsupported File Format",
    function (value) {
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
    }
  ),
});
// export const UserSchemaEdit = Yup.object({
//   name: Yup.string().required("name is required"),
//   email: Yup.string().required("email is required"),

//   });
