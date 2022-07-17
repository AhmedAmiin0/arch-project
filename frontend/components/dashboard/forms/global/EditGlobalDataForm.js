import {
  ContentPageContainer,
  ContentPageFlexBox,
} from "../../layout/ContentPage/ContentPageContainer";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { LocaleSwitch } from "../../layout/Buttons/LocaleSwitch/LocaleSwitch";
import DoneIcon from "@mui/icons-material/Done";
import Image from "next/image";
import { useContext, useRef } from "react";
import { useRouter } from "next/router";
import { useCreate } from "../../../../hooks/useCRUD";
import { useFormik } from "formik";
import Errors from "../../Errors";
import { GlobalContext, SetGlobalData } from "../../layout/Layout";

const EditGlobalDataForm = () => {
  const formRef = useRef(null);
  const router = useRouter();
  const { locale } = router;
  const [globalData, setGlobalData] = useContext(GlobalContext);
  const { createItem } = useCreate(locale, "global");
  const formik = useFormik({
    initialValues: {
      facebook_link: globalData?.global?.facebook_link ?? "",
      instagram_link: globalData?.global?.instagram_link ?? "",
      twitter_link: globalData?.global?.twitter_link ?? "",
      youtube_link: globalData?.global?.youtube_link ?? "",
      address: globalData?.global?.address ?? "",
      phone: globalData?.global?.phone ?? "",
      email: globalData?.global?.email ?? "",
      email_app_secret: globalData?.global?.email_app_secret ?? "",
      message: globalData?.global?.message ?? "",
      name: globalData?.global?.name ?? "",
      logo: globalData?.global?.logo ?? "",
    },
    onSubmit: async (values) => {
      const formData = new FormData(formRef.current);
      formData.append("logo", values.logo);
      let res = await createItem(formData);
      setGlobalData( SetGlobalData(res?.data?.data) );
    },
  });
  return (
    <ContentPageContainer>
      <form onSubmit={formik.handleSubmit} ref={formRef}>
        <Typography variant={"h4"} mb={3}>
          Global Data
        </Typography>
        <ContentPageFlexBox>
          <Stack flex={2} direction={"column"} spacing={2}>
            <Typography variant={"h6"}>Basic information</Typography>
            <Stack direction={"row"} spacing={2}>
              <LocaleSwitch lang={locale} />
            </Stack>
            <Errors formik={formik} />
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
              id="name"
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps("name")}
            />
            <TextField
              id="message"
              label="Message"
              name="message"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps("message")}
              multiline
              rows={12}
            />
            {formik.values.logo?.src != "" && formik.values.logo != "" && (
              <Box position={"relative"} p={2}>
                <Image
                  src={
                    formik.values.logo?.src
                      ? formik.values.logo?.src
                      : formik.values.logo == ""
                      ? ""
                      : URL.createObjectURL(formik.values.logo)
                  }
                  alt={formik.values.logo?.name}
                  width={"100px"}
                  height={"100px"}
                />
              </Box>
            )}

            <label
              htmlFor="contained-button-file"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <input
                accept="image/*"
                id="contained-button-file"
                type="file"
                style={{ display: "none" }}
                name={"logo"}
                onChange={(e) =>
                  formik.setFieldValue("logo", e.target.files[0])
                }
              />
              <Button variant="contained" component="div" my={2}>
                {formik.values.logo ? (
                  <span>Image was Chosen</span>
                ) : (
                  "Upload Thumbnail"
                )}
              </Button>
            </label>
          </Stack>
        </ContentPageFlexBox>
        <ContentPageFlexBox>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                id="facebook_link"
                label="Facebook link"
                name="facebook_link"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("facebook_link")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="instagram_link"
                label="Instagram link"
                name="instagram_link"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("instagram_link")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="twitter_link"
                label="Twitter link"
                name="twitter_link"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("twitter_link")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="youtube_link"
                label="Youtube link"
                name="youtube_link"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("youtube_link")}
              />
            </Grid>
          </Grid>
        </ContentPageFlexBox>
        <ContentPageFlexBox>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                id="address"
                label="Address"
                name="address"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("address")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="phone"
                label="Phone"
                name="phone"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("phone")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="email"
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("email")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="email_app_secret"
                label="Email app secret"
                name="email_app_secret"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("email_app_secret")}
              />
            </Grid>
          </Grid>
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
  );
};
export default EditGlobalDataForm;
