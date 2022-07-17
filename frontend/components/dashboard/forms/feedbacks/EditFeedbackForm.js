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
import {LocaleSwitch} from "../../layout/Buttons/LocaleSwitch/LocaleSwitch";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import {useRef} from "react";
import {useRouter} from "next/router";
import {useCreate, useDelete} from "../../../../hooks/useCRUD";
import {useFormik} from "formik";
import {FeedbackSchemaEdit} from "../../schemas/FeedbackSchema";
import Errors from "../../Errors";

const EditFeedbackForm = ({feedback}) => {
  const formRef = useRef(null);
  const router = useRouter();
  console.log(feedback);
  const {feedback_id} = router.query;
  const {locale} = router;
  const {deleteItem} = useDelete(locale);
  const {createItem} = useCreate(locale, `feedbacks/${feedback_id}`);
  const handleServiceDelete = async () => await deleteItem("feedbacks", feedback_id)


  const formik = useFormik({
    initialValues: {
      name: feedback.name,
      position: feedback.position,
      feedback: feedback.feedback,
      client_photo: feedback.client_photo,
      visible: feedback.visible,
    },
    onSubmit: async (values) => {
      let formData = new FormData(formRef.current);
      if (
        values.client_photo &&
        typeof values.client_photo === "object" &&
        values.client_photo.size > 0
      ) {
        formData.append("client_photo", values.client_photo);
      }
      formData.append("_method", "PUT");
      const res = await createItem(formData);
      console.log(res);
    },
    validationSchema: FeedbackSchemaEdit,
  });
  return <ContentPageContainer>
    <form onSubmit={formik.handleSubmit} ref={formRef}>
      <Typography variant={"h4"} mb={3}>
        Edit Feedback
      </Typography>
      <ContentPageFlexBox>
        <Stack flex={2} direction={"column"} spacing={2} my={2}>
          <Typography variant={"h6"}>Basic information</Typography>
          <LocaleSwitch lang={locale}/>
          <Errors formik={formik}/>
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
            sx={{mb: 3}}
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
            label={"Position"}
            fullWidth
            sx={{mb: 3}}
            name={"position"}
            {...formik.getFieldProps("position")}
            error={
              formik.touched.position && formik.errors.position
                ? true
                : false
            }
            helperText={
              formik.touched.position && formik.errors.position
                ? formik.errors.position
                : ""
            }
          />
          <TextField
            label={"Feedback"}
            fullWidth
            sx={{mb: 3}}
            multiline={true}
            rows={5}
            name={"feedback"}
            {...formik.getFieldProps("feedback")}
            error={
              formik.touched.feedback && formik.errors.feedback
                ? true
                : false
            }
            helperText={
              formik.touched.feedback && formik.errors.feedback
                ? formik.errors.feedback
                : ""
            }
          />

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
                <MenuItem value="VISIBLE">Visible</MenuItem>
                <MenuItem value="HIDDEN">hidden</MenuItem>
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
              sx={{display: "none"}}
              name={"client_photo"}
              onChange={(e) =>
                formik.setFieldValue("client_photo", e.target.files[0])
              }
            />
            {formik.values.client_photo.src.length != 0 && (
              <img
                src={
                  formik.values.client_photo.src ||
                  URL.createObjectURL(formik.values.client_photo)
                }
                alt={formik.values.client_photo.alt}
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
              {formik.values.client_photo ? (
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
            startIcon={<DeleteIcon/>}
            onClick={handleServiceDelete}
          >
            Delete Service
          </Button>
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
export default EditFeedbackForm