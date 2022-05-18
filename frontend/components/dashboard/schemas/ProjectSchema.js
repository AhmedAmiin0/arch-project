import * as Yup from "yup";
export const ProjectSchemaCreate = Yup.object({
  name_ar: Yup.string().required("arabic name is required"),
  name_en: Yup.string().required("english name is required"),
  description_ar: Yup.string().required("arabic description is required"),
  description_en: Yup.string().required("english description is required"),
  // keywords: Yup.string().required("keywords is required"),
  project_highlights_section1_title_ar: Yup.string().required(
    "arabic project highlights section 1 title is required"
  ),
  project_highlights_section1_title_en: Yup.string().required(
    "english project highlights section 1 title is required"
  ),
  project_highlights_section1_description_ar: Yup.string().required(
    "arabic project highlights section 1 description is required"
  ),
  project_highlights_section1_description_en: Yup.string().required(
    "english project highlights section 1 description is required"
  ),
  project_highlights_section2_title_ar: Yup.string().required(
    "arabic project highlights section 2 title is required"
  ),
  project_highlights_section2_title_en: Yup.string().required(
    "english project highlights section 2 title is required"
  ),
  project_highlights_section2_description_ar: Yup.string().required(
    "arabic project highlights section 2 description is required"
  ),
  project_highlights_section2_description_en: Yup.string().required(
    "english project highlights section 2 description is required"
  ),
  project_highlights_section3_title_ar: Yup.string().required(
    "arabic project highlights section 3 title is required"
  ),
  project_highlights_section3_title_en: Yup.string().required(
    "english project highlights section 3 title is required"
  ),
  project_highlights_section3_description_ar: Yup.string().required(
    "arabic project highlights section 3 description is required"
  ),
  project_highlights_section3_description_en: Yup.string().required(
    "english project highlights section 3 description is required"
  ),
  project_highlights_section4_title_ar: Yup.string().required(
    "arabic project highlights section 4 title is required"
  ),
  project_highlights_section4_title_en: Yup.string().required(
    "english project highlights section 4 title is required"
  ),
  project_highlights_section4_description_ar: Yup.string().required(
    "arabic project highlights section 4 description is required"
  ),
  project_highlights_section4_description_en: Yup.string().required(
    "english project highlights section 4 description is required"
  ),
  project_thumb: Yup.mixed()
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
    .required("project thumb is required")
});

export const ProjectSchemaEdit = Yup.object({
  name: Yup.string().required("name is required"),
  description: Yup.string().required("description is required"),
  keywords: Yup.string().nullable(),
  is_featured: Yup.string().required("is featured is required"),
  visible: Yup.string().required("visible is required"),
  project_highlights_section1_title: Yup.string().required( "project highlights section 1 title is required" ),
  project_highlights_section1_description: Yup.string().required( "project highlights section 1 description is required" ),
  project_highlights_section2_title: Yup.string().required( "project highlights section 2 title is required" ),
  project_highlights_section2_description: Yup.string().required( "project highlights section 2 description is required" ),
  project_highlights_section3_title: Yup.string().required( "project highlights section 3 title is required" ),
  project_highlights_section3_description: Yup.string().required( "project highlights section 3 description is required" ),
  project_highlights_section4_title: Yup.string().required( "project highlights section 4 title is required" ),
  project_highlights_section4_description: Yup.string().required( "project highlights section 4 description is required" ),
});
