import {
  Box,
  Button,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {useFormik} from "formik";
import Link from "next/link";
import {useRouter} from "next/router"
import {useRef, useState} from "react";
import {ContentPageContainer, ContentPageFlexBox} from "../../../layout/ContentPage/ContentPageContainer";
import {LangSwitch} from "../../../layout/Buttons/LocaleSwitch/LocaleSwitch";
import {useCreate} from "../../../../../hooks/useCRUD";
import {ProjectSectionSchemaCreate} from "../../../schemas/ProjectSectionSchema";
import Errors from "../../../Errors";
import Image from 'next/image'
const CreateProjectSectionForm = () => {
  const router = useRouter();
  const [lang, setLang] = useState("AR");
  const {createItem} = useCreate(lang, `projects/${router.query.project_id}/sections`);
  const formRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      title_ar: "",
      title_en: "",
      subtitle_ar: "",
      subtitle_en: "",
      description_ar: "",
      description_en: "",
      section_photo: "",
    },
    onSubmit: async (values) => {
      const formData = new FormData(formRef.current);
      formData.append("section_photo", values.section_photo);
      formData.append("title_ar", values.title_ar);
      formData.append("title_en", values.title_en);
      formData.append("subtitle_ar", values.subtitle_ar);
      formData.append("subtitle_en", values.subtitle_en);
      formData.append("description_ar", values.description_ar);
      formData.append("description_en", values.description_en);
      const res = await createItem(formData);
      console.log(res);
      if (res.status === 201)
        router.push(
          `/admin/projects/${router.query.project_id}/sections/${res.data.section_id}`
        );
    },
    validationSchema: ProjectSectionSchemaCreate,
  });
  return <ContentPageContainer>
    <Typography variant={"h4"} mb={3}>
      Create a new Section
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
        <Errors formik={formik}/>
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
            height={"100%"}
            spacing={2}
            flex={2}
            my={2}
          >
            {lang !== "AR" ? (
              <>
                <Typography variant={"h6"}>English Title</Typography>
                <TextField
                  variant={"outlined"}
                  label={"English Title"}
                  fullWidth
                  error={
                    formik.touched.title_en && formik.errors.title_en
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.title_en && formik.errors.title_en
                  }
                  name={"title_en"}
                  {...formik.getFieldProps("title_en")}
                />
              </>
            ) : (
              <>
                <Typography variant={"h6"}>Arabic Title</Typography>
                <TextField
                  variant={"outlined"}
                  label={"Arabic Title"}
                  fullWidth
                  error={
                    formik.touched.title_ar && formik.errors.title_ar
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.title_ar && formik.errors.title_ar
                  }
                  name={"title_ar"}
                  {...formik.getFieldProps("title_ar")}
                />
              </>
            )}
            {lang !== "AR" ? (
              <>
                <Typography variant={"h6"}>English Subtitle</Typography>
                <TextField
                  variant={"outlined"}
                  label={"English Subtitle"}
                  fullWidth
                  error={
                    formik.touched.subtitle_en && formik.errors.subtitle_en
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.subtitle_en && formik.errors.subtitle_en
                  }
                  name={"subtitle_en"}
                  {...formik.getFieldProps("subtitle_en")}
                />
              </>
            ) : (
              <>
                <Typography variant={"h6"}>Arabic Subtitle</Typography>
                <TextField
                  variant={"outlined"}
                  label={"Arabic Subtitle"}
                  fullWidth
                  error={
                    formik.touched.subtitle_ar && formik.errors.subtitle_ar
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.subtitle_ar && formik.errors.subtitle_ar
                  }
                  name={"subtitle_ar"}
                  {...formik.getFieldProps("subtitle_ar")}
                />
              </>
            )}
            {lang !== "AR" ? (
              <>
                <Typography variant={"h6"}>English Description</Typography>
                <TextField
                  variant={"outlined"}
                  label={"English Description"}
                  multiline={true}
                  rows={7}
                  fullWidth
                  error={
                    formik.touched.description_en &&
                    formik.errors.description_en
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.description_en &&
                    formik.errors.description_en
                  }
                  name={"description_en"}
                  {...formik.getFieldProps("description_en")}
                />
              </>
            ) : (
              <>
                <Typography variant={"h6"}>Arabic Description</Typography>
                <TextField
                  variant={"outlined"}
                  label={"Arabic Description"}
                  fullWidth
                  multiline={true}
                  rows={7}
                  error={
                    formik.touched.description_ar &&
                    formik.errors.description_ar
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.description_ar &&
                    formik.errors.description_ar
                  }
                  name={"description_ar"}
                  {...formik.getFieldProps("description_ar")}
                />
              </>
            )}
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                type="file"
                sx={{display: "none"}}
                name="section_photo"
                onChange={(e) =>
                  formik.setFieldValue("section_photo", e.target.files[0])
                }
                onBlur={formik.handleBlur}
              />
              <Button variant="contained" component={"span"}>
                {(formik.errors.section_photo && (
                  <span>{formik.errors.section_photo}</span>
                )) || <span>Upload Photo</span>}
              </Button>
            </label>
            <Box position={"relative"} width={"100%"} height={"100%"}>
              {formik.values.section_photo && (
                <Image
                  src={
                    formik.values.section_photo?.src ??
                    URL.createObjectURL(formik.values.section_photo)
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
            <Box display={"flex"} justifyContent={"center"}>
              <Link href={`projects/${router.query.project_id}/sections`}>
                <Button
                  component={"a"}
                  variant={"contained"}
                  color={"error"}
                  size={"large"}
                  style={{margin: "10px"}}
                >
                  Cancel
                </Button>
              </Link>
              <Button
                type={"submit"}
                variant={"contained"}
                color={"success"}
                size={"large"}
                style={{margin: "10px"}}
              >
                Create
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </ContentPageFlexBox>
  </ContentPageContainer>
}
export default CreateProjectSectionForm