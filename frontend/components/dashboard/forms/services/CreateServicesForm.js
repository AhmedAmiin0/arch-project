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
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import {useFormik} from "formik";
import {useRef, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import { useCreate } from "../../../../hooks/useCRUD";
import { ServicesSchemaCreate } from "../../schemas/ServicesSchema";
import { ContentPageContainer, ContentPageFlexBox } from "../../layout/ContentPage/ContentPageContainer";
import Errors from "../../Errors";
import {LangSwitch} from "../../layout/Buttons/LocaleSwitch/LocaleSwitch";

const CreateServicesForm = () => {
  const formRef = useRef(null);
  const router = useRouter();
  const [lang, setLang] = useState("AR");
  const { createItem } = useCreate(lang.toLowerCase(), `services`);
  const formik = useFormik({
    initialValues: {
      title_ar: "",
      title_en: "",
      subtitle_ar: "",
      subtitle_en: "",
      description_ar: "",
      description_en: "",
      excerpt_ar: "",
      excerpt_en: "",
      service_thumb: "",
      service_images: [],
      visible: "HIDDEN",
      is_featured: "NOT_FEATURED",
    },
    onSubmit: (values) => {
      let formData = new FormData(formRef.current);
      formData.append("title_ar", values.title_ar);
      formData.append("title_en", values.title_en);
      formData.append("subtitle_ar", values.subtitle_ar);
      formData.append("subtitle_en", values.subtitle_en);
      formData.append("description_ar", values.description_ar);
      formData.append("description_en", values.description_en);
      formData.append("excerpt_ar", values.excerpt_ar);
      formData.append("excerpt_en", values.excerpt_en);
      formData.append("service_thumb", values.service_thumb);
      formData.append("service_images", values.service_images);
      createItem(formData);
    },
    validationSchema: ServicesSchemaCreate,
  });
  return <ContentPageContainer>
    <form onSubmit={formik.handleSubmit} ref={formRef}>
      <Typography variant={"h4"} mb={3}>
        Create a new Service
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
            <LangSwitch lang={lang} setLang={setLang}/>
          </Stack>
          
                    <Errors formik={formik}  />

        </Stack>
        <Box
          flex={3}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {lang == "EN" && (
            <TextField
              label={"English Title"}
              fullWidth
              name={"title_en"}
              error={
                formik.touched.title_en && formik.errors.title_en
                  ? true
                  : false
              }
              helperText={
                formik.touched.title_en && formik.errors.title_en
                  ? formik.errors.title_en
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.title_en ?? ""}
              onBlur={formik.handleBlur}
              sx={{
                mb: 3,
              }}
            />
          )}
          {lang == "AR" && (
            <TextField
              label={"Arabic Title"}
              fullWidth
              name={"title_ar"}
              error={
                formik.touched.title_ar && formik.errors.title_ar
                  ? true
                  : false
              }
              helperText={
                formik.touched.title_ar && formik.errors.title_ar
                  ? formik.errors.title_ar
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.title_ar ?? ""}
              onBlur={formik.handleBlur}
              sx={{mb: 3}}
            />
          )}
          {lang == "EN" && (
            <TextField
              label={"English Subtitle "}
              fullWidth
              name={"subtitle_en"}
              error={
                formik.touched.subtitle_en && formik.errors.subtitle_en
                  ? true
                  : false
              }
              helperText={
                formik.touched.subtitle_en && formik.errors.subtitle_en
                  ? formik.errors.subtitle_en
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.subtitle_en ?? ""}
              onBlur={formik.handleBlur}
              sx={{mb: 3}}
            />
          )}
          {lang == "AR" && (
            <TextField
              label={"Arabic Subtitle "}
              fullWidth
              name={"subtitle_ar"}
              error={
                formik.touched.subtitle_ar && formik.errors.subtitle_ar
                  ? true
                  : false
              }
              helperText={
                formik.touched.subtitle_ar && formik.errors.subtitle_ar
                  ? formik.errors.subtitle_ar
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.subtitle_ar ?? ""}
              onBlur={formik.handleBlur}
              sx={{mb: 3}}
            />
          )}
          {lang == "EN" && (
            <TextField
              label={"English Excerpt "}
              fullWidth
              multiline={true}
              rows={5}
              name={"excerpt_en"}
              error={
                formik.touched.excerpt_en && formik.errors.excerpt_en
                  ? true
                  : false
              }
              helperText={
                formik.touched.excerpt_en && formik.errors.excerpt_en
                  ? formik.errors.excerpt_en
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.excerpt_en ?? ""}
              onBlur={formik.handleBlur}
              sx={{mb: 3}}
            />
          )}
          {lang == "AR" && (
            <TextField
              label={"Arabic Excerpt "}
              fullWidth
              multiline={true}
              rows={5}
              name={"excerpt_ar"}
              error={
                formik.touched.excerpt_ar && formik.errors.excerpt_ar
                  ? true
                  : false
              }
              helperText={
                formik.touched.excerpt_ar && formik.errors.excerpt_ar
                  ? formik.errors.excerpt_ar
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.excerpt_ar ?? ""}
              onBlur={formik.handleBlur}
              sx={{mb: 3}}
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
              sx={{mb: 3}}
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
              sx={{mb: 3}}
            />
          )}
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
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              type="file"
              sx={{display: "none"}}
              name={"service_thumb"}
              onChange={(e) =>
                formik.setFieldValue("service_thumb", e.target.files[0])
              }
              onBlur={formik.handleBlur}
            />
            <Button variant="contained" component={"span"}>
              {(formik.errors.service_thumb && (
                <span>{formik.errors.service_thumb}</span>
              )) || <span>Upload Thumbnail</span>}
            </Button>
          </label>
        </Box>
      </ContentPageFlexBox>
      <ContentPageFlexBox>
        <Stack flex={2}>
          <Typography variant={"h6"} my={2}>
            Gallery
          </Typography>
          <Typography variant={"subtitle1"} fontWeight={"lighter"}>
            Images Appears in the Services Gallery
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
            name={"service_images[]"}
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
              formik.setFieldValue("service_images", e.target.files)
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
          <Link href={"/admin/services"}>
            <Button
              variant="outlined"
              component={"a"}
              color="error"
              startIcon={<CloseIcon/>}
            >
              Cancel
            </Button>
          </Link>
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
export default CreateServicesForm