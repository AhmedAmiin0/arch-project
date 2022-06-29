import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  ContentPageContainer,
  ContentPageFlexBox,
} from "../../../components/dashboard/layout/ContentPage/ContentPageContainer";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import axios from "../../../config/axios";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ProjectSchemaCreate } from "../../../components/dashboard/schemas/ProjectSchema";
import { useCreate } from "../../../hooks/useCRUD";
import { HighlightedSectionStyles } from "../../../components/dashboard/projects/HighlightedSectionStyles";
import { LangSwitch } from "../../../components/dashboard/layout/Buttons/LocaleSwitch/LocaleSwitch";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";

const Create = ({ categories_and_services, globalData }) => {
  const formRef = useRef(null);
  const router = useRouter();
  const [lang, setLang] = useState("AR");
  const categories = categories_and_services.categories;
  const services = categories_and_services.services;
  const { createItem } = useCreate(lang, "projects");
  const formik = useFormik({
    initialValues: {
      name_ar: "",
      name_en: "",
      description_ar: "",
      description_en: "",
      keywords: "",
      project_highlights_section1_title_ar: "",
      project_highlights_section1_title_en: "",
      project_highlights_section1_description_ar: "",
      project_highlights_section1_description_en: "",
      project_highlights_section2_title_ar: "",
      project_highlights_section2_title_en: "",
      project_highlights_section2_description_ar: "",
      project_highlights_section2_description_en: "",
      project_highlights_section3_title_ar: "",
      project_highlights_section3_title_en: "",
      project_highlights_section3_description_ar: "",
      project_highlights_section3_description_en: "",
      project_highlights_section4_title_ar: "",
      project_highlights_section4_title_en: "",
      project_highlights_section4_description_ar: "",
      project_highlights_section4_description_en: "",
      project_thumb: "",
      project_images: [],
      visible: "HIDDEN",
      is_featured: "NOT_FEATURED",
      category: "",
      service: "",
    },
    onSubmit: async (values) => {
      let formData = new FormData(formRef.current);
      formData.append("name_ar", values.name_ar);
      formData.append("name_en", values.name_en);
      formData.append("description_ar", values.description_ar);
      formData.append("description_en", values.description_en);
      formData.append("keywords", values.keywords);
      formData.append(
        "project_highlights_section1_title_ar",
        values.project_highlights_section1_title_ar
      );
      formData.append(
        "project_highlights_section1_title_en",
        values.project_highlights_section1_title_en
      );
      formData.append(
        "project_highlights_section1_description_ar",
        values.project_highlights_section1_description_ar
      );
      formData.append(
        "project_highlights_section1_description_en",
        values.project_highlights_section1_description_en
      );
      formData.append(
        "project_highlights_section2_title_ar",
        values.project_highlights_section2_title_ar
      );
      formData.append(
        "project_highlights_section2_title_en",
        values.project_highlights_section2_title_en
      );
      formData.append(
        "project_highlights_section2_description_ar",
        values.project_highlights_section2_description_ar
      );
      formData.append(
        "project_highlights_section2_description_en",
        values.project_highlights_section2_description_en
      );
      formData.append(
        "project_highlights_section3_title_ar",
        values.project_highlights_section3_title_ar
      );
      formData.append(
        "project_highlights_section3_title_en",
        values.project_highlights_section3_title_en
      );
      formData.append(
        "project_highlights_section3_description_ar",
        values.project_highlights_section3_description_ar
      );
      formData.append(
        "project_highlights_section3_description_en",
        values.project_highlights_section3_description_en
      );
      formData.append(
        "project_highlights_section4_title_ar",
        values.project_highlights_section4_title_ar
      );
      formData.append(
        "project_highlights_section4_title_en",
        values.project_highlights_section4_title_en
      );
      formData.append(
        "project_highlights_section4_description_ar",
        values.project_highlights_section4_description_ar
      );
      formData.append(
        "project_highlights_section4_description_en",
        values.project_highlights_section4_description_en
      );
      formData.append("project_thumb", values.project_thumb);
      formData.append("project_images[]", values.project_images);
      formData.append("visible", values.visible);
      formData.append("is_featured", values.is_featured);
      let res = await createItem(formData);
      if (res.status === 201) {
        router.push("/admin/projects/" + res.data.project_id);
      }
    },
    validationSchema: ProjectSchemaCreate,
  });
  return (
    <Layout data={globalData}>
      <ContentPageContainer>
        <form onSubmit={formik.handleSubmit} ref={formRef}>
          <Typography variant={"h4"} mb={3}>
            Create a new project
          </Typography>
          <ContentPageFlexBox>
            <Stack
              direction={"column"}
              height={"100%"}
              spacing={2}
              flex={2}
              my={2}
            >
              <Typography variant={"h6"}>Basic information</Typography>
              <Stack direction={"row"} spacing={2}>
                <LangSwitch lang={lang} setLang={setLang} />
              </Stack>
            </Stack>
            <Box
              flex={3}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {lang == "EN" && (
                <TextField
                  label={"English Name"}
                  fullWidth
                  name={"name_en"}
                  error={
                    formik.touched.name_en && formik.errors.name_en
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.name_en && formik.errors.name_en
                      ? formik.errors.name_en
                      : ""
                  }
                  onChange={formik.handleChange}
                  value={formik.values.name_en ?? ""}
                  onBlur={formik.handleBlur}
                  sx={{
                    mb: 3,
                  }}
                />
              )}
              {lang == "AR" && (
                <TextField
                  label={"Arabic Name"}
                  fullWidth
                  name={"name_ar"}
                  error={
                    formik.touched.name_ar && formik.errors.name_ar
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.name_ar && formik.errors.name_ar
                      ? formik.errors.name_ar
                      : ""
                  }
                  onChange={formik.handleChange}
                  value={formik.values.name_ar ?? ""}
                  onBlur={formik.handleBlur}
                  sx={{ mb: 3 }}
                />
              )}
              {lang == "EN" && (
                <TextField
                  label={"English Description "}
                  fullWidth
                  multiline={true}
                  rows={10}
                  name={"description_en"}
                  error={
                    formik.touched.description_en &&
                    formik.errors.description_en
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.description_en &&
                    formik.errors.description_en
                      ? formik.errors.description_en
                      : ""
                  }
                  onChange={formik.handleChange}
                  value={formik.values.description_en ?? ""}
                  onBlur={formik.handleBlur}
                  sx={{ mb: 3 }}
                />
              )}
              {lang == "AR" && (
                <TextField
                  label={"Arabic Description "}
                  fullWidth
                  multiline={true}
                  rows={10}
                  name={"description_ar"}
                  error={
                    formik.touched.description_ar &&
                    formik.errors.description_ar
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.description_ar &&
                    formik.errors.description_ar
                      ? formik.errors.description_ar
                      : ""
                  }
                  onChange={formik.handleChange}
                  value={formik.values.description_ar ?? ""}
                  onBlur={formik.handleBlur}
                  sx={{ mb: 3 }}
                />
              )}
              <Stack direction={"row"} spacing={2}>
                <FormControl sx={{ minWidth: 120, width: "100%" }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Category"
                    name={"category"}
                    {...formik.getFieldProps("category")}
                  >
                    <MenuItem value={""}>None</MenuItem>
                    {categories.map((category, i) => (
                      <MenuItem key={i} value={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 120, width: "100%" }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    service
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="service"
                    name={"service"}
                    {...formik.getFieldProps("service")}
                  >
                    <MenuItem value={""}>None</MenuItem>
                    {services.map((service, i) => (
                      <MenuItem key={i} value={service.id}>
                        {service.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
              <Stack spacing={4} direction={"row"} mt={3} mb={3}>
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Visibility
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Visibility"
                    name={"visible"}
                    {...formik.getFieldProps("visible")}
                  >
                    <MenuItem value={"HIDDEN"}>hidden</MenuItem>
                    <MenuItem value={"VISIBLE"}>Visible</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Featured
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Featured"
                    name={"is_featured"}
                    {...formik.getFieldProps("is_featured")}
                  >
                    <MenuItem value={"NOT_FEATURED"}>Not Featured</MenuItem>
                    <MenuItem value={"FEATURED"}>Featured</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  type="file"
                  sx={{ display: "none" }}
                  name={"project_thumb"}
                  onChange={(e) =>
                    formik.setFieldValue("project_thumb", e.target.files[0])
                  }
                  onBlur={formik.handleBlur}
                />
                <Button variant="contained" component={"span"}>
                  {(formik.errors.project_thumb && (
                    <span>{formik.errors.project_thumb}</span>
                  )) || <span>Upload Thumbnail</span>}
                </Button>
              </label>
            </Box>
          </ContentPageFlexBox>
          <ContentPageFlexBox>
            <Stack
              // direction={"column"}
              width={"100%"}
              sx={{
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" margin={"10px auto"}>
                highlighted Sections
              </Typography>
              <Box>
                <Typography variant="h6" margin={"7px auto"}>
                  Section one
                </Typography>
                <HighlightedSectionStyles>
                  {lang == "AR" ? (
                    <TextField
                      label={"Highlighted Section Arabic Title"}
                      name={"project_highlights_section1_title_ar"}
                      {...formik.getFieldProps(
                        "project_highlights_section1_title_ar"
                      )}
                      error={
                        formik.touched.project_highlights_section1_title_ar &&
                        formik.errors.project_highlights_section1_title_ar
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched.project_highlights_section1_title_ar &&
                        formik.errors.project_highlights_section1_title_ar
                          ? formik.errors.project_highlights_section1_title_ar
                          : ""
                      }
                      sx={{ mx: 1 }}
                      fullWidth
                    />
                  ) : (
                    <TextField
                      sx={{ mx: 1 }}
                      fullWidth
                      label={"Highlighted Section English Title"}
                      name={"project_highlights_section1_title_en"}
                      {...formik.getFieldProps(
                        "project_highlights_section1_title_en"
                      )}
                      error={
                        formik.touched.project_highlights_section1_title_en &&
                        formik.errors.project_highlights_section1_title_en
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched.project_highlights_section1_title_en &&
                        formik.errors.project_highlights_section1_title_en
                          ? formik.errors.project_highlights_section1_title_en
                          : ""
                      }
                    />
                  )}
                  {lang == "AR" ? (
                    <TextField
                      sx={{ mx: 1 }}
                      fullWidth
                      label={"Highlighted Section Arabic Description"}
                      name={"project_highlights_section1_description_ar"}
                      {...formik.getFieldProps(
                        "project_highlights_section1_description_ar"
                      )}
                      error={
                        formik.touched
                          .project_highlights_section1_description_ar &&
                        formik.errors.project_highlights_section1_description_ar
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched
                          .project_highlights_section1_description_ar &&
                        formik.errors.project_highlights_section1_description_ar
                          ? formik.errors
                              .project_highlights_section1_description_ar
                          : ""
                      }
                    />
                  ) : (
                    <TextField
                      sx={{ mx: 1 }}
                      fullWidth
                      label={"Highlighted Section English Description"}
                      name={"project_highlights_section1_description_en"}
                      {...formik.getFieldProps(
                        "project_highlights_section1_description_en"
                      )}
                      error={
                        formik.touched
                          .project_highlights_section1_description_en &&
                        formik.errors.project_highlights_section1_description_en
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched
                          .project_highlights_section1_description_en &&
                        formik.errors.project_highlights_section1_description_en
                          ? formik.errors
                              .project_highlights_section1_description_en
                          : ""
                      }
                    />
                  )}
                </HighlightedSectionStyles>
              </Box>
              <Box>
                <Typography variant="h6" margin={"7px auto"}>
                  Section Two
                </Typography>
                <HighlightedSectionStyles>
                  {lang == "AR" ? (
                    <TextField
                      fullWidth
                      sx={{ mx: 1 }}
                      label={"Highlighted Section Arabic Title"}
                      name={"project_highlights_section2_title_ar"}
                      {...formik.getFieldProps(
                        "project_highlights_section2_title_ar"
                      )}
                      error={
                        formik.touched.project_highlights_section2_title_ar &&
                        formik.errors.project_highlights_section2_title_ar
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched.project_highlights_section2_title_ar &&
                        formik.errors.project_highlights_section2_title_ar
                          ? formik.errors.project_highlights_section2_title_ar
                          : ""
                      }
                    />
                  ) : (
                    <TextField
                      sx={{ mx: 1 }}
                      fullWidth
                      label={"Highlighted Section English Title"}
                      name={"project_highlights_section2_title_en"}
                      {...formik.getFieldProps(
                        "project_highlights_section2_title_en"
                      )}
                      error={
                        formik.touched.project_highlights_section2_title_en &&
                        formik.errors.project_highlights_section2_title_en
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched.project_highlights_section2_title_en &&
                        formik.errors.project_highlights_section2_title_en
                          ? formik.errors.project_highlights_section2_title_en
                          : ""
                      }
                    />
                  )}
                  {lang == "AR" ? (
                    <TextField
                      fullWidth
                      sx={{ mx: 1 }}
                      label={"Highlighted Section Arabic Description"}
                      name={"project_highlights_section1_description_ar"}
                      {...formik.getFieldProps(
                        "project_highlights_section2_description_ar"
                      )}
                      error={
                        formik.touched
                          .project_highlights_section2_description_ar &&
                        formik.errors.project_highlights_section2_description_ar
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched
                          .project_highlights_section2_description_ar &&
                        formik.errors.project_highlights_section2_description_ar
                          ? formik.errors
                              .project_highlights_section2_description_ar
                          : ""
                      }
                    />
                  ) : (
                    <TextField
                      fullWidth
                      sx={{ mx: 1 }}
                      label={"Highlighted Section English Description"}
                      name={"project_highlights_section2_description_en"}
                      {...formik.getFieldProps(
                        "project_highlights_section2_description_en"
                      )}
                      error={
                        formik.touched
                          .project_highlights_section2_description_en &&
                        formik.errors.project_highlights_section2_description_en
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched
                          .project_highlights_section2_description_en &&
                        formik.errors.project_highlights_section2_description_en
                          ? formik.errors
                              .project_highlights_section2_description_en
                          : ""
                      }
                    />
                  )}
                </HighlightedSectionStyles>
              </Box>
              <Box>
                <Typography variant="h6" margin={"7px auto"}>
                  Section Three
                </Typography>
                <HighlightedSectionStyles>
                  {lang == "AR" ? (
                    <TextField
                      fullWidth
                      sx={{ mx: 1 }}
                      label={"Highlighted Section Arabic Title"}
                      name={"project_highlights_section3_title_ar"}
                      {...formik.getFieldProps(
                        "project_highlights_section3_title_ar"
                      )}
                      error={
                        formik.touched.project_highlights_section3_title_ar &&
                        formik.errors.project_highlights_section3_title_ar
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched.project_highlights_section3_title_ar &&
                        formik.errors.project_highlights_section3_title_ar
                          ? formik.errors.project_highlights_section3_title_ar
                          : ""
                      }
                    />
                  ) : (
                    <TextField
                      fullWidth
                      sx={{ mx: 1 }}
                      label={"Highlighted Section English Title"}
                      name={"project_highlights_section3_title_en"}
                      {...formik.getFieldProps(
                        "project_highlights_section3_title_en"
                      )}
                      error={
                        formik.touched.project_highlights_section3_title_en &&
                        formik.errors.project_highlights_section3_title_en
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched.project_highlights_section3_title_en &&
                        formik.errors.project_highlights_section3_title_en
                          ? formik.errors.project_highlights_section3_title_en
                          : ""
                      }
                    />
                  )}
                  {lang == "AR" ? (
                    <TextField
                      sx={{ mx: 1 }}
                      fullWidth
                      label={"Highlighted Section Arabic Description"}
                      name={"project_highlights_section3_description_ar"}
                      {...formik.getFieldProps(
                        "project_highlights_section3_description_ar"
                      )}
                      error={
                        formik.touched
                          .project_highlights_section3_description_ar &&
                        formik.errors.project_highlights_section3_description_ar
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched
                          .project_highlights_section3_description_ar &&
                        formik.errors.project_highlights_section3_description_ar
                          ? formik.errors
                              .project_highlights_section3_description_ar
                          : ""
                      }
                    />
                  ) : (
                    <TextField
                      sx={{ mx: 1 }}
                      fullWidth
                      label={"Highlighted Section English Description"}
                      name={"project_highlights_section3_description_en"}
                      {...formik.getFieldProps(
                        "project_highlights_section3_description_en"
                      )}
                      error={
                        formik.touched
                          .project_highlights_section3_description_en &&
                        formik.errors.project_highlights_section3_description_en
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched
                          .project_highlights_section3_description_en &&
                        formik.errors.project_highlights_section3_description_en
                          ? formik.errors
                              .project_highlights_section3_description_en
                          : ""
                      }
                    />
                  )}
                </HighlightedSectionStyles>
              </Box>
              <Box>
                <Typography variant="h6" margin={"7px auto"}>
                  Section Four
                </Typography>
                <HighlightedSectionStyles>
                  {lang == "AR" ? (
                    <TextField
                      fullWidth
                      sx={{ mx: 1 }}
                      label={"Highlighted Section Arabic Title"}
                      name={"project_highlights_section4_title_ar"}
                      {...formik.getFieldProps(
                        "project_highlights_section4_title_ar"
                      )}
                      error={
                        formik.touched.project_highlights_section4_title_ar &&
                        formik.errors.project_highlights_section4_title_ar
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched.project_highlights_section4_title_ar &&
                        formik.errors.project_highlights_section4_title_ar
                          ? formik.errors.project_highlights_section4_title_ar
                          : ""
                      }
                    />
                  ) : (
                    <TextField
                      fullWidth
                      sx={{ mx: 1 }}
                      label={"Highlighted Section English Title"}
                      name={"project_highlights_section4_title_en"}
                      {...formik.getFieldProps(
                        "project_highlights_section4_title_en"
                      )}
                      error={
                        formik.touched.project_highlights_section4_title_en &&
                        formik.errors.project_highlights_section4_title_en
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched.project_highlights_section4_title_en &&
                        formik.errors.project_highlights_section4_title_en
                          ? formik.errors.project_highlights_section4_title_en
                          : ""
                      }
                    />
                  )}
                  {lang == "AR" ? (
                    <TextField
                      fullWidth
                      sx={{ mx: 1 }}
                      label={"Highlighted Section Arabic Description"}
                      name={"project_highlights_section4_description_ar"}
                      {...formik.getFieldProps(
                        "project_highlights_section4_description_ar"
                      )}
                      error={
                        formik.touched
                          .project_highlights_section4_description_ar &&
                        formik.errors.project_highlights_section4_description_ar
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched
                          .project_highlights_section4_description_ar &&
                        formik.errors.project_highlights_section4_description_ar
                          ? formik.errors
                              .project_highlights_section4_description_ar
                          : ""
                      }
                    />
                  ) : (
                    <TextField
                      fullWidth
                      sx={{ mx: 1 }}
                      label={"Highlighted Section English Description"}
                      name={"project_highlights_section4_description_en"}
                      {...formik.getFieldProps(
                        "project_highlights_section4_description_en"
                      )}
                      error={
                        formik.touched
                          .project_highlights_section4_description_en &&
                        formik.errors.project_highlights_section4_description_en
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched
                          .project_highlights_section4_description_en &&
                        formik.errors.project_highlights_section4_description_en
                          ? formik.errors
                              .project_highlights_section4_description_en
                          : ""
                      }
                    />
                  )}
                </HighlightedSectionStyles>
              </Box>
            </Stack>
          </ContentPageFlexBox>
          <ContentPageFlexBox>
            <Stack flex={2}>
              <Typography variant={"h6"} my={2}>
                Gallery
              </Typography>
              <Typography variant={"subtitle1"} fontWeight={"lighter"}>
                Images Appears in the projects Gallery
              </Typography>
            </Stack>
            <Box
              flex={3}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              border={"1px solid"}
              borderColor={"rgba(255,255,255,.4)"}
              borderRadius={"4px"}
              sx={{
                position: "relative",
                "&:after": {
                  content: '"Upload Images"',
                  display: "block",
                },
              }}
            >
              <input
                id="contained-button-file"
                type="file"
                multiple
                name={"project_images[]"}
                style={{
                  opacity: 0,
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  display: "block",
                  cursor: "pointer",
                  left: 0,
                }}
                onChange={(e) =>
                  formik.setFieldValue("project_images", e.target.files)
                }
              />
            </Box>
          </ContentPageFlexBox>
          <ContentPageFlexBox>
            <Stack flex={2}>
              <Typography variant={"h6"} my={2}>
                Actions
              </Typography>
            </Stack>
            <Stack
              flex={3}
              justifyContent={"center"}
              direction={"row"}
              alignItems={"center"}
              spacing={2}
            >
              <Link href={"/admin/projects"}>
                <Button
                  variant="outlined"
                  component={"a"}
                  color="error"
                  startIcon={<CloseIcon />}
                >
                  Cancel
                </Button>
              </Link>
              <Button
                type={"submit"}
                variant="outlined"
                color="primary"
                startIcon={<DoneIcon />}
              >
                Save
              </Button>
            </Stack>
          </ContentPageFlexBox>
        </form>
      </ContentPageContainer>
    </Layout>
  );
};
export default Create;

export async function getServerSideProps(context) {
  const { locale } = context;
  const { token } = cookies(context);
  const categories_and_services =
    (await axios
      .get("/projects/create", {
        headers: { "Accept-Language": locale },
      })
      .then((res) => res.data)) ?? {};
  const globalData = await axios
    .get("/global", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data.data ?? {});
  if (!token || token === "" || token === null)
    return {
      redirect: { destination: "/admin/login" },
    };

  return {
    props: { categories_and_services, globalData },
  };
}
