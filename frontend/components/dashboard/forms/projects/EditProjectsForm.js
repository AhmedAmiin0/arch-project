import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import {useFormik} from "formik";
import {useContext, useRef, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import Delete from "@mui/icons-material/Delete";
import {ContentPageContainer, ContentPageFlexBox} from "../../layout/ContentPage/ContentPageContainer";
import {LocaleSwitch} from "../../layout/Buttons/LocaleSwitch/LocaleSwitch";
import {useCreate, useDelete} from "../../../../hooks/useCRUD";
import {ProjectSchemaEdit} from "../../schemas/ProjectSchema";
import {GalleryModal} from "../../GalleryModel/GalleryModal";
import {HighlightedSectionStyles} from "../../projects/HighlightedSectionStyles";
import Errors from "../../Errors";

const EditProjectsForm = ({
                            categories_and_services,
                            project
                          }) => {
  const formRef = useRef(null);
  const router = useRouter();
  const {locale} = router;
  const {project_id} = router.query;
  const id = project_id;
  const categories = categories_and_services.categories;
  const services = categories_and_services.services;
  const {createItem} = useCreate(locale, "projects/" + id);
  const {deleteItem} = useDelete(locale);
  console.log(project);
  console.log(categories_and_services);

  const formik = useFormik({
    initialValues: {
      name: project?.name,
      description: project?.description,
      keywords: project?.keywords,
      project_highlights_section1_title:
      project?.project_highlights_section1_title,
      project_highlights_section1_description:
      project?.project_highlights_section1_description,
      project_highlights_section2_title:
      project?.project_highlights_section2_title,
      project_highlights_section2_description:
      project?.project_highlights_section2_description,
      project_highlights_section3_title:
      project?.project_highlights_section3_title,
      project_highlights_section3_description:
      project?.project_highlights_section3_description,
      project_highlights_section4_title:
      project?.project_highlights_section4_title,
      project_highlights_section4_description:
      project?.project_highlights_section4_description,
      project_thumb: project?.project_thumb,
      visible: project?.visible,
      is_featured: project?.is_featured,
      category: project?.category?.id || "",
      service: project?.service?.id || "",
    },
    onSubmit: async (values) => {
      let formData = new FormData(formRef.current);
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("keywords", values.keywords);
      formData.append(
        "project_highlights_section1_title",
        values.project_highlights_section1_title
      );
      formData.append(
        "project_highlights_section1_description",
        values.project_highlights_section1_description
      );
      formData.append(
        "project_highlights_section2_title",
        values.project_highlights_section2_title
      );
      formData.append(
        "project_highlights_section2_description",
        values.project_highlights_section2_description
      );
      formData.append(
        "project_highlights_section3_title",
        values.project_highlights_section3_title
      );
      formData.append(
        "project_highlights_section3_description",
        values.project_highlights_section3_description
      );
      formData.append(
        "project_highlights_section4_title",
        values.project_highlights_section4_title
      );
      formData.append(
        "project_highlights_section4_description",
        values.project_highlights_section4_description
      );
      if (
        values.project_thumb &&
        typeof values.project_thumb === "object" &&
        values.project_thumb.size > 0
      ) {
        formData.append("project_thumb", values.project_thumb);
      }
      formData.append("visible", values.visible);
      formData.append("is_featured", values.is_featured);
      formData.append("_method", "PUT");
      const response = await createItem(formData);
      console.log(response);
    },
    validationSchema: ProjectSchemaEdit,
  });
  return <ContentPageContainer>
    <form onSubmit={formik.handleSubmit} ref={formRef}>
      <Typography variant={"h4"} mb={3}>
        Edit a new project
      </Typography>
      <ContentPageFlexBox>
        <Stack
          direction={"column"}
          height={"100%"}
          spacing={2}
          flex={2}
          m={3}
        >
          <Typography variant={"h6"}>Basic information</Typography>
          <Stack direction={"row"} spacing={2}>
            <LocaleSwitch location={"projects/" + id} lang={locale}/>
          </Stack>
          <Link href={`${id}/sections`}>
            <Button variant={"contained"} component="a">
              Related Sections
            </Button>
          </Link>
          <Errors formik={formik}/>
        </Stack>
        <Box
          flex={3}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <TextField
            label={"Name"}
            fullWidth
            name={"name"}
            error={formik.touched.name && formik.errors.name ? true : false}
            helperText={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""
            }
            onChange={formik.handleChange}
            value={formik.values.name ?? ""}
            onBlur={formik.handleBlur}
            sx={{
              mb: 3,
            }}
          />

          <TextField
            label={"Description "}
            fullWidth
            multiline={true}
            rows={10}
            name={"description"}
            error={
              formik.touched.description && formik.errors.description
                ? true
                : false
            }
            helperText={
              formik.touched.description && formik.errors.description
                ? formik.errors.description
                : ""
            }
            onChange={formik.handleChange}
            value={formik.values.description ?? ""}
            onBlur={formik.handleBlur}
            sx={{mb: 3}}
          />
          <Stack direction={"row"} spacing={2}>
            <FormControl sx={{minWidth: 120, width: "100%"}}>
              <InputLabel id="demo-simple-select-helper-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Category"
                name={"category"}
                value={formik.values.category}
                onChange={(e) =>
                  formik.setFieldValue("category", e.target.value)
                }
                // {...formik.getFieldProps("categories")}
              >
                <MenuItem value={""}>NONE</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{minWidth: 120, width: "100%"}}>
              <InputLabel id="demo-simple-select-helper-label">
                service
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="service"
                name={"service"}
                value={formik.values.service}
                onChange={(e) =>
                  formik.setFieldValue("service", e.target.value)
                }
              >
                <MenuItem value={""}>NONE</MenuItem>
                {services.map((service) => (
                  <MenuItem key={service.id} value={service.id}>
                    {service.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack spacing={4} direction={"row"} mt={3} mb={3}>
            <FormControl sx={{minWidth: 120}}>
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
            <FormControl sx={{minWidth: 120}}>
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
          <label
            htmlFor="contained-button-file"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Input
              accept="image/*"
              id="contained-button-file"
              type="file"
              sx={{display: "none"}}
              name={"project_thumb"}
              onChange={(e) =>
                formik.setFieldValue("project_thumb", e.target.files[0])
              }
            />
            {/* <img
                src={
                  formik.values.project_thumb.src ||
                  URL.createObjectURL(formik.values.project_thumb)
                }
                alt={formik.values.project_thumb.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              /> */}
            <Button variant="contained" component="div" my={2}>
              {formik.values.project_thumb ? (
                <span>Image was Chosen</span>
              ) : (
                "Upload Thumbnail"
              )}
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
              <TextField
                label={"Highlighted Section Arabic Title"}
                name={"project_highlights_section1_title_ar"}
                {...formik.getFieldProps(
                  "project_highlights_section1_title"
                )}
                error={
                  formik.touched.project_highlights_section1_title &&
                  formik.errors.project_highlights_section1_title
                    ? true
                    : false
                }
                helperText={
                  formik.touched.project_highlights_section1_title &&
                  formik.errors.project_highlights_section1_title
                    ? formik.errors.project_highlights_section1_title
                    : ""
                }
                sx={{mx: 1}}
                fullWidth
              />

              <TextField
                sx={{mx: 1}}
                fullWidth
                label={"Highlighted Section Arabic Description"}
                name={"project_highlights_section1_description"}
                {...formik.getFieldProps(
                  "project_highlights_section1_description"
                )}
                error={
                  formik.touched.project_highlights_section1_description &&
                  formik.errors.project_highlights_section1_description
                    ? true
                    : false
                }
                helperText={
                  formik.touched.project_highlights_section1_description &&
                  formik.errors.project_highlights_section1_description
                    ? formik.errors.project_highlights_section1_description
                    : ""
                }
              />
            </HighlightedSectionStyles>
          </Box>
          <Box>
            <Typography variant="h6" margin={"7px auto"}>
              Section Two
            </Typography>
            <HighlightedSectionStyles>
              <TextField
                fullWidth
                sx={{mx: 1}}
                label={"Highlighted Section Arabic Title"}
                name={"project_highlights_section2_title"}
                {...formik.getFieldProps(
                  "project_highlights_section2_title"
                )}
                error={
                  formik.touched.project_highlights_section2_title &&
                  formik.errors.project_highlights_section2_title
                    ? true
                    : false
                }
                helperText={
                  formik.touched.project_highlights_section2_title &&
                  formik.errors.project_highlights_section2_title
                    ? formik.errors.project_highlights_section2_title
                    : ""
                }
              />
              <TextField
                fullWidth
                sx={{mx: 1}}
                label={"Highlighted Section Arabic Description"}
                name={"project_highlights_section1_description"}
                {...formik.getFieldProps(
                  "project_highlights_section2_description"
                )}
                error={
                  formik.touched.project_highlights_section2_description &&
                  formik.errors.project_highlights_section2_description
                    ? true
                    : false
                }
                helperText={
                  formik.touched.project_highlights_section2_description &&
                  formik.errors.project_highlights_section2_description
                    ? formik.errors.project_highlights_section2_description
                    : ""
                }
              />
            </HighlightedSectionStyles>
          </Box>
          <Box>
            <Typography variant="h6" margin={"7px auto"}>
              Section Three
            </Typography>
            <HighlightedSectionStyles>
              <TextField
                fullWidth
                sx={{mx: 1}}
                label={"Highlighted Section Arabic Title"}
                name={"project_highlights_section3_title"}
                {...formik.getFieldProps(
                  "project_highlights_section3_title"
                )}
                error={
                  formik.touched.project_highlights_section3_title &&
                  formik.errors.project_highlights_section3_title
                    ? true
                    : false
                }
                helperText={
                  formik.touched.project_highlights_section3_title &&
                  formik.errors.project_highlights_section3_title
                    ? formik.errors.project_highlights_section3_title
                    : ""
                }
              />

              <TextField
                sx={{mx: 1}}
                fullWidth
                label={"Highlighted Section Arabic Description"}
                name={"project_highlights_section3_description"}
                {...formik.getFieldProps(
                  "project_highlights_section3_description"
                )}
                error={
                  formik.touched.project_highlights_section3_description &&
                  formik.errors.project_highlights_section3_description
                    ? true
                    : false
                }
                helperText={
                  formik.touched.project_highlights_section3_description &&
                  formik.errors.project_highlights_section3_description
                    ? formik.errors.project_highlights_section3_description
                    : ""
                }
              />
            </HighlightedSectionStyles>
          </Box>
          <Box>
            <Typography variant="h6" margin={"7px auto"}>
              Section Four
            </Typography>
            <HighlightedSectionStyles>
              <TextField
                fullWidth
                sx={{mx: 1}}
                label={"Highlighted Section Arabic Title"}
                name={"project_highlights_section4_title"}
                {...formik.getFieldProps(
                  "project_highlights_section4_title"
                )}
                error={
                  formik.touched.project_highlights_section4_title &&
                  formik.errors.project_highlights_section4_title
                    ? true
                    : false
                }
                helperText={
                  formik.touched.project_highlights_section4_title &&
                  formik.errors.project_highlights_section4_title
                    ? formik.errors.project_highlights_section4_title
                    : ""
                }
              />
              <TextField
                fullWidth
                sx={{mx: 1}}
                label={"Highlighted Section Arabic Description"}
                name={"project_highlights_section4_description"}
                {...formik.getFieldProps(
                  "project_highlights_section4_description"
                )}
                error={
                  formik.touched.project_highlights_section4_description &&
                  formik.errors.project_highlights_section4_description
                    ? true
                    : false
                }
                helperText={
                  formik.touched.project_highlights_section4_description &&
                  formik.errors.project_highlights_section4_description
                    ? formik.errors.project_highlights_section4_description
                    : ""
                }
              />
            </HighlightedSectionStyles>
          </Box>
        </Stack>
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
          <Button
            variant="outlined"
            component={"a"}
            color="error"
            startIcon={<Delete/>}
            onClick={async () => {
              await deleteItem("projects", id);
            }}
          >
            Delete
          </Button>
          <Button
            type={"submit"}
            variant="outlined"
            color="primary"
            startIcon={<DoneIcon/>}
          >
            Save
          </Button>
        </Stack>
      </ContentPageFlexBox>
    </form>
    <ContentPageFlexBox>
      <GalleryModal
        initial={project.project_images}
        name={"project"}
        id={id}
      />
    </ContentPageFlexBox>
  </ContentPageContainer>
}
export default EditProjectsForm