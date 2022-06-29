import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import {
  LangSwitch,
  LocaleSwitch,
} from "../../../components/dashboard/layout/Buttons/LocaleSwitch/LocaleSwitch";
import DoneIcon from "@mui/icons-material/Done";
import {
  ContentPageContainer,
  ContentPageFlexBox,
} from "../../../components/dashboard/layout/ContentPage/ContentPageContainer";
import axios from "../../../config/axios";
import { useCreate } from "../../../hooks/useCRUD";
import { Editor } from "../../../components/dashboard/Editor/RichEditor";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";

const ContactUsPage = ({ contact, globalData }) => {
  console.log(contact);
  const formRef = useRef(null);
  const router = useRouter();
  const { locale } = router;
  const { createItem } = useCreate(locale, "page/contact");
  const formik = useFormik({
    initialValues: {
      title: contact?.title ?? "",
      subtitle: contact?.subtitle ?? "",
      contact_details: contact?.contact_details ?? "",
      location: contact?.location ?? "",
    },
    onSubmit: async (values) => {
      let res = await createItem(values);
      console.log(res);
    },
  });
  console.log(formik.values);

  return (
    <Layout data={globalData}>
      <ContentPageContainer>
        <form onSubmit={formik.handleSubmit} ref={formRef}>
          <Typography variant={"h4"} mb={3}>
            Contact
          </Typography>
          <ContentPageFlexBox>
            <Stack flex={2} direction={"column"} spacing={2}>
              <Typography variant={"h6"}>Basic information</Typography>
              <Stack direction={"row"} spacing={2}>
                <LocaleSwitch lang={locale} />
              </Stack>
              {formik.errors && (
                <Typography variant={"body1"} color={"error"}>
                  {Object.values(formik.errors).join("\n")}
                </Typography>
              )}
            </Stack>
            <Stack
              flex={3}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={2}
            >
              <TextField
                id="title"
                label="Title"
                name="title"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("title")}
              />
              <TextField
                id="subtitle"
                label="Subtitle"
                name="subtitle"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("subtitle")}
              />

              <Box
                m={2}
                width={"100%"}
                height={"100%"}
                sx={{
                  "& .ql-editor": {
                    minHeight: "300px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "10px",
                  },
                }}
              >
                <Editor
                  value={formik.values.contact_details}
                  onChange={(value) =>
                    formik.setFieldValue("contact_details", value)
                  }
                />
              </Box>
              <TextField
                id="location"
                label="Location"
                name="location"
                {...formik.getFieldProps("location")}
                onBlur={formik.handleBlur}
                variant="outlined"
                fullWidth
              />
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
                type={"submit"}
                variant="contained"
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
export default ContactUsPage;

export const getServerSideProps = async (ctx) => {
  const { locale } = ctx;
  const { token } = cookies(ctx);
  if (!token) return { redirect: { destination: "/admin/login" } };
  let contact = {};
  await axios
    .get("/page/contact", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => (contact = res.data.data))
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
    props: { contact, globalData },
  };
};
