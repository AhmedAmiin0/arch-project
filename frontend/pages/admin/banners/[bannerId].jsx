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
import { useFormik } from "formik";
import { BannerSchemaEdit } from "../../../components/dashboard/schemas/BannerSchema";
import Link from "next/link";
import axios from "../../../config/axios";
import { Delete } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
import { useRouter } from "next/router";
import { LocaleSwitch } from "../../../components/dashboard/layout/Buttons/LocaleSwitch/LocaleSwitch";
import { useDelete } from "../../../hooks/useCRUD";
import Image from "next/image";
import cookies from "next-cookies";

const EditBanner = ({ banners }) => {
  const router = useRouter();
  const locale = router.locale;
  const { bannerId } = router.query;
  const { deleteItem } = useDelete(locale);
  const handleDelete = async () => {
    await deleteItem(`banners`,bannerId);
  };

  const formik = useFormik({
    initialValues: {
      title: banners?.data?.title,
      subtitle: banners?.data?.subtitle,
      url: banners?.data?.url,
      banner: banners?.data?.banner,
    },
    onSubmit: async (values) => {},
    validationSchema: BannerSchemaEdit,
  });
  return (
    <ContentPageContainer>
      <Typography variant={"h4"} mb={3}>
        Edit Banner
      </Typography>
      <ContentPageFlexBox>
        <Stack direction={"column"} height={"100%"} spacing={2} flex={2} my={2}>
          <Typography variant={"h6"}>Basic information</Typography>
          {formik.errors && (
            <Typography variant={"body1"} color={"error"}>
              {Object.values(formik.errors).join("\n")}
            </Typography>
          )}
          <LocaleSwitch location={"banners/" + bannerId} lang={locale} />
        </Stack>
        <Box
          flex={3}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <form onSubmit={formik.handleSubmit}>
            <Stack
              direction={"column"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
              spacing={2}
              flex={2}
              my={2}
            >
              <TextField
                variant={"outlined"}
                label={"Title"}
                fullWidth
                name={"title"}
                {...formik.getFieldProps("title")}
              />
              <TextField
                variant={"outlined"}
                label={"Subtitle"}
                fullWidth
                name={"subtitle"}
                {...formik.getFieldProps("subtitle")}
              />
              <TextField
                variant={"outlined"}
                label={"Url"}
                fullWidth
                name={"url"}
                {...formik.getFieldProps("url")}
              />
              <Box 
                position={"relative"}
                width={"100%"}
                height={"100%"}
              >
                {formik.values.banner && (
                  <Image
                    src={
                      formik.values.banner?.src ??
                      URL.createObjectURL(formik.values.banner)
                    }
                    alt=""
                    title=""
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                  />
                )}
              </Box>
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

              <Box display={"flex"} justifyContent={"center"}>
                <Button
                  component={"a"}
                  variant={"contained"}
                  color={"error"}
                  size={"large"}
                  style={{ margin: "10px" }}
                  endIcon={<Delete />}
                  onClick={handleDelete}
                >
                  Delete
                </Button>
                <Button
                  type={"submit"}
                  variant={"contained"}
                  color={"success"}
                  size={"large"}
                  style={{ margin: "10px" }}
                  startIcon={<DoneIcon />}
                >
                  Save
                </Button>
              </Box>
            </Stack>
          </form>
        </Box>
      </ContentPageFlexBox>
    </ContentPageContainer>
  );
};
EditBanner.layout = "L3";
export default EditBanner;

export async function getServerSideProps({ params, locale }) {
  const { bannerId } = params;
  const banners =
    (await axios
      .get(`banners/${bannerId}`, { headers: { "Accept-Language": locale } })
      .then((res) => res.data)) || {};
  return { props: { banners } };
}
