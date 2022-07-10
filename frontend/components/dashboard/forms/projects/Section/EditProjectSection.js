import {
  Box,
  Button,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import {useFormik} from "formik";
import {useRouter} from "next/router";
import {useRef} from "react";
import {ContentPageContainer, ContentPageFlexBox} from "../../../layout/ContentPage/ContentPageContainer";
import {LocaleSwitch} from "../../../layout/Buttons/LocaleSwitch/LocaleSwitch";
import {useCreate, useDelete} from "../../../../../hooks/useCRUD";
import {ProjectSectionSchemaEdit} from "../../../schemas/ProjectSectionSchema";
import Errors from "../../../Errors";

const EditProjectSection = ({
                              section
                            }) => {
  const router = useRouter();
  const {section_id, project_id} = router.query;
  const locale = router.locale;
  const formRef = useRef(null);
  const {deleteItem} = useDelete(locale);
  const url = `/projects/${project_id}/sections`;
  const {createItem} = useCreate(
    locale,
    `projects/${project_id}/sections/${section_id}`
  );
  const handleSectionDelete = async () => {
    try {
      await deleteItem(url, section_id);
      router.push(`/admin/projects/${project_id}/sections`);
    } catch (e) {
      console.log(e.message);
    }
  };
  const formik = useFormik({
    initialValues: {
      title: section.title,
      subtitle: section.subtitle,
      description: section.description,
      section_photo: section.section_photo,
    },
    onSubmit: async (values) => {
      let formData = new FormData(formRef.current);
      if (
        values.section_photo &&
        typeof values.section_photo === "object" &&
        values.section_photo.size > 0
      ) {
        formData.append("section_photo", values.section_photo);
      }
      formData.append("_method", "PUT");
      let res = await createItem(formData);
      console.log(res);
    },
    validationSchema: ProjectSectionSchemaEdit,
  });

  return <ContentPageContainer>
    <form onSubmit={formik.handleSubmit} ref={formRef}>
      <Typography variant={"h4"} mb={3}>
        Edit Section
      </Typography>
      <ContentPageFlexBox>
        <Stack flex={2} direction={"column"} spacing={2}>
          <Typography variant={"h6"}>Basic information</Typography>
          <LocaleSwitch lang={locale}/>
          <Errors formik={formik}/>
        </Stack>
        <Box
          flex={3}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <TextField
            label={"Title"}
            fullWidth
            sx={{mb: 3}}
            name={"title"}
            error={
              formik.touched.title && formik.errors.title ? true : false
            }
            helperText={
              formik.touched.title && formik.errors.title
                ? formik.errors.title
                : ""
            }
            {...formik.getFieldProps("title")}
          />
          <TextField
            label={"Subtitle"}
            fullWidth
            sx={{mb: 3}}
            name={"subtitle"}
            {...formik.getFieldProps("subtitle")}
            error={
              formik.touched.subtitle && formik.errors.subtitle
                ? true
                : false
            }
            helperText={
              formik.touched.subtitle && formik.errors.subtitle
                ? formik.errors.subtitle
                : ""
            }
          />
          <TextField
            label={"Description"}
            fullWidth
            sx={{mb: 3}}
            multiline={true}
            rows={10}
            name={"description"}
            {...formik.getFieldProps("description")}
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
          />
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
              name={"section_photo"}
              onChange={(e) =>
                formik.setFieldValue("section_photo", e.target.files[0])
              }
            />
            <img
              src={
                formik.values.section_photo.src ||
                URL.createObjectURL(formik.values.section_photo)
              }
              alt={formik.values.section_photo.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "5px",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            />
            <Button variant="contained" component="div" my={2}>
              {formik.values.section_photo ? (
                <span>Image was Chosen</span>
              ) : (
                "Upload Thumbnail"
              )}
            </Button>
          </label>
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
          <Button
            variant="outlined"
            component={"a"}
            color="error"
            startIcon={<DeleteIcon/>}
            onClick={handleSectionDelete}
          >
            Delete section
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
  </ContentPageContainer>
}
export default EditProjectSection