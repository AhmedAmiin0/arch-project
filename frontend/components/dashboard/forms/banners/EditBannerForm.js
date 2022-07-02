import {ContentPageContainer, ContentPageFlexBox} from "../../layout/ContentPage/ContentPageContainer";
import {Box, Button, Input, Stack, TextField, Typography} from "@mui/material";
import Errors from "../../Errors";
import {LocaleSwitch} from "../../layout/Buttons/LocaleSwitch/LocaleSwitch";
import Image from "next/image";
import {useRouter} from "next/router";
import {useRef} from "react";
import {useCreate, useDelete} from "../../../../hooks/useCRUD";
import {BannerSchemaEdit} from "../../schemas/BannerSchema";
import {useFormik} from "formik";
import DoneIcon from '@mui/icons-material/Done';
import Delete from '@mui/icons-material/Delete';

const EditBannerForm = ({banners})=>{
 const router = useRouter();
  const { locale } = router;
  const formRef = useRef(null);

  const { bannerId } = router.query;
  const { deleteItem } = useDelete(locale);
  const { createItem } = useCreate(locale, `banners/${bannerId}`);

  const handleDelete = async () => {
    await deleteItem(`banners`, bannerId);
  };

  const formik = useFormik({
    initialValues: {
      title: banners?.data?.title,
      subtitle: banners?.data?.subtitle,
      url: banners?.data?.url,
      banner: banners?.data?.banner,
    },
    onSubmit: async (values) => {
      const formData = new FormData(formRef.current);
      if (
        values.banner &&
        typeof values.banner === "object" &&
        values.banner.size > 0
      ) {
        formData.append("banner", values.banner);
      }
      formData.append('_method','PUT')
      await createItem(formData);
    },
    validationSchema: BannerSchemaEdit,
  });

  return   <ContentPageContainer>
        <Typography variant={"h4"} mb={3}>
          Edit Banner
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
            <Errors formik={formik} />
            <LocaleSwitch location={"banners/" + bannerId} lang={locale} />
          </Stack>
          <Box
            flex={3}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <form onSubmit={formik.handleSubmit} ref={formRef}>
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
                <Box position={"relative"} width={"100%"} height={"100%"}>
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
}
export default EditBannerForm