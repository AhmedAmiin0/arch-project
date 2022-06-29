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
import { useFormik } from "formik";
import axios from "../../../config/axios";
import { useRef } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router";
import { useCreate, useDelete } from "../../../hooks/useCRUD";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";

const EditCorporate = ({ corporate, globalData }) => {
  const formRef = useRef(null);
  const router = useRouter();
  const { corporate_id } = router.query;
  const locale = router.locale;
  const { deleteItem } = useDelete(locale);
  const { createItem } = useCreate(locale, `corporates/${corporate_id}`);
  const handleServiceDelete = async () => {
    await deleteItem("corporates", corporate_id);
    router.push("/admin/corporates");
  };

  const formik = useFormik({
    initialValues: {
      name: corporate.name,
      url: corporate.url,
      corporate_logo: corporate.corporate_logo,
    },
    onSubmit: async (values) => {
      let formData = new FormData(formRef.current);
      if (
        values.corporate_logo &&
        typeof values.corporate_logo === "object" &&
        values.corporate_logo.size > 0
      ) {
        formData.append("corporate_logo", values.corporate_logo);
      }
      formData.append("_method", "PUT");
      const res = await createItem(formData);
      console.log(res);
    },
    // validationSchema: FeedbackSchemaEdit
  });

  return (
    <Layout data={globalData}>
      <ContentPageContainer>
        <form onSubmit={formik.handleSubmit} ref={formRef}>
          <Typography variant={"h4"} mb={3}>
            Edit Corporate
          </Typography>
          <ContentPageFlexBox>
            <Stack flex={2} direction={"column"} spacing={2} my={2}>
              <Typography variant={"h6"}>Basic information</Typography>
              {formik.errors && (
                <Typography variant={"body1"} color={"error"}>
                  {Object.values(formik.errors).join("\n")}
                </Typography>
              )}
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
                name={"name"}
                error={formik.touched.name && formik.errors.name ? true : false}
                helperText={
                  formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : ""
                }
                {...formik.getFieldProps("name")}
              />
              <TextField
                label={"Url"}
                fullWidth
                sx={{ mb: 3 }}
                name={"url"}
                {...formik.getFieldProps("url")}
                error={formik.touched.url && formik.errors.url ? true : false}
                helperText={
                  formik.touched.url && formik.errors.url
                    ? formik.errors.url
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
                  sx={{ display: "none" }}
                  name={"corporate_logo"}
                  onChange={(e) =>
                    formik.setFieldValue("corporate_logo", e.target.files[0])
                  }
                />
                {formik.values.corporate_logo?.src?.length != 0 && (
                  <img
                    src={
                      formik.values.corporate_logo.src ||
                      URL.createObjectURL(formik.values.corporate_logo)
                    }
                    alt={formik.values.corporate_logo.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "5px",
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                  />
                )}
                <Button variant="contained" component="div" my={2}>
                  {formik.values.corporate_logo ? (
                    <span>Image was Chosen</span>
                  ) : (
                    "Upload Photo"
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
      </ContentPageContainer>
    </Layout>
  );
};
export default EditCorporate;
export const getServerSideProps = async (ctx) => {
  const { params, locale } = ctx;
  const { token } = cookies(ctx);
  const { corporate_id } = params;
  if (!token) return { redirect: { destination: "/admin/login" } };
  let corporate = {};
  await axios
    .get("/corporates/" + corporate_id, {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => (corporate = res.data.data))
    .catch((err) => {
      if (err.response.status === 401)
        return axios
          .post("/logout", { headers: { Authorization: `Bearer ${token}` } })
          .then(() => {
            return { redirect: { destination: "/admin/login" } };
          });
    });
    const globalData = await axios
    .get("/global", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data.data ?? {});
  return {
    props: { corporate, globalData },
  };
};
