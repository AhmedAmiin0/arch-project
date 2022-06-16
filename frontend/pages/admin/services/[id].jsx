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
import {
  ContentPageContainer,
  ContentPageFlexBox,
} from "../../../components/dashboard/layout/ContentPage/ContentPageContainer";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { ServicesSchemaEdit } from "../../../components/dashboard/schemas/ServicesSchema";
import axios from "../../../config/axios";
import { useContext, useReducer, useRef, useState } from "react";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  errorAlertAction,
  notificationContext,
  successAlertAction,
} from "../../../context/NotificationsContext";
import { useRouter } from "next/router";
import { LocaleSwitch } from "../../../components/dashboard/layout/Buttons/LocaleSwitch/LocaleSwitch";
import { GalleryModal } from "../../../components/dashboard/GalleryModel/GalleryModal";

const Edit = ({ service }) => {
  const formRef = useRef(null);
  const [notify, dispatch] = useContext(notificationContext);
  const router = useRouter();
  const { id } = router.query;
  const locale = router.locale;
  const handleServiceDelete = async () => {
    try {
      await axios.delete(`/services/${id}`);
      dispatch(successAlertAction("Service deleted successfully"));
      router.push("/admin/services");
    } catch (e) {
      dispatch(errorAlertAction(e.response.data.message));
      console.log(e.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: service.title,
      subtitle: service.subtitle,
      description: service.description,
      excerpt: service.excerpt,
      service_thumb: service.service_thumb,
      visible: service.visible,
      is_featured: service.is_featured,
    },
    onSubmit: async (values) => {
      let formData = new FormData(formRef.current);
      if (
        values.service_thumb &&
        typeof values.service_thumb === "object" &&
        values.service_thumb.size > 0
      ) {
        formData.append("service_thumb", values.service_thumb);
      }
      formData.append("_method", "PUT");
      try {
        let res = await axios.post("services/" + id, formData, {
          headers: { "Accept-Language": locale },
        });
        console.log(res);
        dispatch(successAlertAction("Service updated successfully"));
      } catch (e) {
        console.log(e);
        dispatch(errorAlertAction("Error updating service"));
      }
    },
    // validationSchema: ServicesSchemaEdit
  });
  console.log(service);

  return (
    <ContentPageContainer>
      <form onSubmit={formik.handleSubmit} ref={formRef}>
        <Typography variant={"h4"} mb={3}>
          Edit Service
        </Typography>
        <ContentPageFlexBox>
          <Stack flex={2} direction={"column"} spacing={2}>
            <Typography variant={"h6"}>Basic information</Typography>
            {formik.errors && (
              <ul style={{ color: "#f44336" }}>
                {formik.errors && formik.touched
                  ? Object.values(formik.errors).map((err) => {
                      return <li>{err}</li>;
                    })
                  : ""}
              </ul>
            )}
            <LocaleSwitch lang={locale} location={"services/" + id} />
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
              sx={{ mb: 3 }}
              name={"title"}
              error={formik.touched.title && formik.errors.title ? true : false}
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
              sx={{ mb: 3 }}
              name={"subtitle"}
              {...formik.getFieldProps("subtitle")}
              error={
                formik.touched.subtitle && formik.errors.subtitle ? true : false
              }
              helperText={
                formik.touched.subtitle && formik.errors.subtitle
                  ? formik.errors.subtitle
                  : ""
              }
            />
            <TextField
              label={"Excerpt"}
              fullWidth
              sx={{ mb: 3 }}
              multiline={true}
              rows={5}
              name={"excerpt"}
              {...formik.getFieldProps("excerpt")}
              error={
                formik.touched.excerpt && formik.errors.excerpt ? true : false
              }
              helperText={
                formik.touched.excerpt && formik.errors.excerpt
                  ? formik.errors.excerpt
                  : ""
              }
            />

            <TextField
              label={"Description"}
              fullWidth
              sx={{ mb: 3 }}
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
                  <MenuItem value="VISIBLE">Visible</MenuItem>
                  <MenuItem value="HIDDEN">hidden</MenuItem>
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
                  <MenuItem value="NOT_FEATURED">Not Featured</MenuItem>
                  <MenuItem value="FEATURED">Featured</MenuItem>
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
                sx={{ display: "none" }}
                name={"service_thumb"}
                onChange={(e) =>
                  formik.setFieldValue("service_thumb", e.target.files[0])
                }
              />
              <img
                src={
                  formik.values.service_thumb.src ||
                  URL.createObjectURL(formik.values.service_thumb)
                }
                alt={formik.values.service_thumb.alt}
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
                {formik.values.service_thumb ? (
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
              startIcon={<DeleteIcon />}
              onClick={handleServiceDelete}
            >
              Delete Service
            </Button>
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
      <ContentPageFlexBox>
        <GalleryModal
          initial={service.service_images}
          name={"service"}
          id={id}
        />
      </ContentPageFlexBox>
    </ContentPageContainer>
  );
};
Edit.layout = "L3";
export default Edit;

export async function getServerSideProps(ctx) {
  const {locale,params} = ctx;
  const { id } = params;

  const service =
    (await axios
      .get("/services/" + id, {
        headers: { "Accept-Language": locale },
      })
      .then((res) => res.data)) ?? {};
  return {
    props: { service },
  };
}
