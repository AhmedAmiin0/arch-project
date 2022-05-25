import * as Yup from "yup";
export const BannerSchemaCreate = Yup.object({
  title_ar: Yup.string().nullable(),
  title_en: Yup.string().nullable(),
  subtitle_ar: Yup.string().nullable(),
  subtitle_en: Yup.string().nullable(),
  banner: Yup.mixed()
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
    .required("Banner is required"),
  url: Yup.string().required("url is required"),
});
export const BannerSchemaEdit = Yup.object({
  title: Yup.string().nullable(),
  subtitle: Yup.string().nullable(),
  url: Yup.string().required("url is required"),
  banner: Yup.mixed().nullable(),
});
