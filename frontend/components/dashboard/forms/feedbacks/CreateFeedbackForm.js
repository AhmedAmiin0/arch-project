import {ContentPageContainer, ContentPageFlexBox} from "../../layout/ContentPage/ContentPageContainer";
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
  Typography
} from "@mui/material";
import {LangSwitch} from "../../layout/Buttons/LocaleSwitch/LocaleSwitch";
import Link from "next/link";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import {useRouter} from "next/router";
import {useRef, useState} from "react";
import {useCreate} from "../../../../hooks/useCRUD";
import {useFormik} from "formik";
import {FeedbackSchemaCreate} from "../../schemas/FeedbackSchema";

const CreateFeedbackForm = () => {
   const formRef = useRef(null);
  const router = useRouter();
  const [lang, setLang] = useState("AR");
  const { createItem } = useCreate(lang, "feedbacks");
  const formik = useFormik({
    initialValues: {
      name_en: "",
      name_ar: "",
      position_ar: "",
      position_en: "",
      feedback_ar: "",
      feedback_en: "",
      client_photo: "",
      visible: "HIDDEN",
    },
    onSubmit: async (values) => {
      let formData = new FormData(formRef.current);
      formData.append("name_ar", values.name_ar);
      formData.append("name_en", values.name_en);
      formData.append("position_ar", values.position_ar);
      formData.append("position_en", values.position_en);
      formData.append("feedback_ar", values.feedback_ar);
      formData.append("feedback_en", values.feedback_en);
      formData.append("client_photo", values.client_photo);
      formData.append("visible", values.visible);
      const res = await createItem(formData);
      if (res.status === 201)
        router.push(`/admin/feedbacks/${res.data.feedback_id}`);
    },
    validationSchema: FeedbackSchemaCreate,
  });
  return <ContentPageContainer>
    <form onSubmit={formik.handleSubmit} ref={formRef}>
      <Typography variant={"h4"} mb={3}>
        Create a new Feedback
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
        </Stack>
        <Box
          flex={3}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {lang == "EN" && (
            <TextField
              label={"English Name"}
              fullWidth
              name={"name_en"}
              error={
                formik.touched.name_en && formik.errors.name_en
                  ? true
                  : false
              }
              helperText={
                formik.touched.name_en && formik.errors.name_en
                  ? formik.errors.name_en
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.name_en ?? ""}
              onBlur={formik.handleBlur}
              sx={{
                mb: 3,
              }}
            />
          )}
          {lang == "AR" && (
            <TextField
              label={"Arabic Name"}
              fullWidth
              name={"name_ar"}
              error={
                formik.touched.name_ar && formik.errors.name_ar
                  ? true
                  : false
              }
              helperText={
                formik.touched.name_ar && formik.errors.name_ar
                  ? formik.errors.name_ar
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.name_ar ?? ""}
              onBlur={formik.handleBlur}
              sx={{mb: 3}}
            />
          )}
          {lang == "EN" && (
            <TextField
              label={"English Position "}
              fullWidth
              name={"position_en"}
              error={
                formik.touched.position_en && formik.errors.position_en
                  ? true
                  : false
              }
              helperText={
                formik.touched.position_en && formik.errors.position_en
                  ? formik.errors.position_en
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.position_en ?? ""}
              onBlur={formik.handleBlur}
              sx={{mb: 3}}
            />
          )}
          {lang == "AR" && (
            <TextField
              label={"Arabic Position "}
              fullWidth
              name={"position_ar"}
              error={
                formik.touched.position_ar && formik.errors.position_ar
                  ? true
                  : false
              }
              helperText={
                formik.touched.position_ar && formik.errors.position_ar
                  ? formik.errors.position_ar
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.position_ar ?? ""}
              onBlur={formik.handleBlur}
              sx={{mb: 3}}
            />
          )}
          {lang == "EN" && (
            <TextField
              label={"English Feedback "}
              fullWidth
              multiline={true}
              rows={10}
              name={"feedback_en"}
              error={
                formik.touched.feedback_en && formik.errors.feedback_en
                  ? true
                  : false
              }
              helperText={
                formik.touched.feedback_en && formik.errors.feedback_en
                  ? formik.errors.feedback_en
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.feedback_en ?? ""}
              onBlur={formik.handleBlur}
              sx={{mb: 3}}
            />
          )}
          {lang == "AR" && (
            <TextField
              label={"Arabic Feedback "}
              fullWidth
              multiline={true}
              rows={10}
              name={"feedback_ar"}
              error={
                formik.touched.feedback_ar && formik.errors.feedback_ar
                  ? true
                  : false
              }
              helperText={
                formik.touched.feedback_ar && formik.errors.feedback_ar
                  ? formik.errors.feedback_ar
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.feedback_ar ?? ""}
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
          </Stack>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              type="file"
              sx={{display: "none"}}
              name={"client_photo"}
              onChange={(e) =>
                formik.setFieldValue("client_photo", e.target.files[0])
              }
              onBlur={formik.handleBlur}
            />
            <Button variant="contained" component={"span"}>
              {(formik.errors.client_photo && (
                <span>{formik.errors.client_photo}</span>
              )) || <span>Upload Photo</span>}
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
          <Link href={"/admin/feedbacks"}>
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
export default CreateFeedbackForm