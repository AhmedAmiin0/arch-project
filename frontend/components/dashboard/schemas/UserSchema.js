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
export const UserSchemaEdit = Yup.object({
  name: Yup.string().required("name is required"),
  email: Yup.string().required("email is required"),
});

export const UserPasswordSchema = Yup.object({
  password: Yup.string().required("password is required")
    .min(6, "Password must be at least 6 characters")
    .max(255, "Password must be less than 255 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number and one special character"
    ),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("password confirmation is required"),
});