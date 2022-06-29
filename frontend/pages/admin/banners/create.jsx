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
import { LangSwitch } from "../../../components/dashboard/layout/Buttons/LocaleSwitch/LocaleSwitch";
import { useCreate } from "../../../hooks/useCRUD";
import { BannerSchemaCreate } from "../../../components/dashboard/schemas/BannerSchema";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";

const CreateBanner = ({ globalData }) => {
  const formRef = useRef(null);
  const router = useRouter();
  const [lang, setLang] = useState("AR");
  const { createItem } = useCreate(lang.toLowerCase(), "banners");
  const formik = useFormik({
    initialValues: {
      title_en: "",
      title_ar: "",
      subtitle_en: "",
      subtitle_ar: "",
      url: "",
      banner: "",
    },
    onSubmit: async (values) => {
      let formData = new FormData(formRef.current);
      formData.append("banner", values.banner);
      formData.append("title_en", values.title_en);
      formData.append("title_ar", values.title_ar);
      formData.append("subtitle_en", values.subtitle_en);
      formData.append("subtitle_ar", values.subtitle_ar);
      let res = await createItem(formData);
      router.push(`/admin/banners/${res.data.banner_id}`);
      console.log(res);
    },
    validationSchema: BannerSchemaCreate,
  });
  console.log(formik.values.banner);
  return (
    <Layout data={globalData}>
      <ContentPageContainer>
        <form onSubmit={formik.handleSubmit} ref={formRef}>
          <Typography variant={"h4"} mb={3}>
            Create a new Banners
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
              {formik.errors && (
                <Typography variant={"body1"} color={"error"}>
                  {Object.values(formik.errors).join("\n")}
                </Typography>
              )}
              <Stack direction={"row"} spacing={2}>
                <LangSwitch lang={lang} setLang={setLang} />
              </Stack>
            </Stack>
            <Stack
              flex={3}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={2}
            >
              {lang == "EN" ? (
                <>
                  <TextField
                    label="Title"
                    name="title_en"
                    variant="outlined"
                    fullWidth
                    {...formik.getFieldProps("title_en")}
                  />
                  <TextField
                    label="Subtitle"
                    name="subtitle_en"
                    variant="outlined"
                    fullWidth
                    {...formik.getFieldProps("subtitle_en")}
                  />
                </>
              ) : (
                <>
                  <TextField
                    label="Title"
                    name="title_ar"
                    variant="outlined"
                    fullWidth
                    {...formik.getFieldProps("title_ar")}
                  />
                  <TextField
                    label="Subtitle"
                    name="subtitle_ar"
                    variant="outlined"
                    fullWidth
                    {...formik.getFieldProps("subtitle_ar")}
                  />
                </>
              )}
              <TextField
                label="URL"
                name="url"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("url")}
              />
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  type="file"
                  sx={{ display: "none" }}
                  name={"banner"}
                  onChange={(e) =>
                    formik.setFieldValue("banner", e.target.files[0])
                  }
                  onBlur={formik.handleBlur}
                />
                <Button variant="contained" component={"span"}>
                  {(formik.errors.banner && (
                    <span>{formik.errors.banner}</span>
                  )) || <span>Upload Thumbnail</span>}
                </Button>
              </label>
              {formik.values.banner && (
                <img
                  src={URL.createObjectURL(formik.values.banner) || ""}
                  alt=""
                  title=""
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                />
              )}
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
              <Link href={"/admin/banners"}>
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
export default CreateBanner;
export async function getServerSideProps(ctx) {
  const { token } = cookies(ctx);
  const { locale } = ctx;
  if (!token || token === "" || token === null)
    return {
      redirect: { destination: "/admin/login" },
    };
  const globalData = await axios
    .get("/global", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data.data ?? {});

  return {
    props: { globalData },
  };
}
