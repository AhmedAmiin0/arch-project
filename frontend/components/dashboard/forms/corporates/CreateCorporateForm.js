import {ContentPageContainer, ContentPageFlexBox} from "../../layout/ContentPage/ContentPageContainer";
import {Box, Button, Input, Stack, TextField, Typography} from "@mui/material";
import Errors from "../../Errors";
import Link from "next/link";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import {useFormik} from "formik";
import {useCreate} from "../../../../hooks/useCRUD";
import {useRouter} from "next/router";
import {useRef} from "react";

const CreateCorporateForm = () => {
  const formRef = useRef(null);
  const router = useRouter();
  const {locale} = router;
  const {createItem} = useCreate(locale, "corporates");
  const formik = useFormik({
    initialValues: {
      name: "",
      url: "",
      corporate_logo: "",
    },
    onSubmit: async (values) => {
      let formData = new FormData(formRef.current);
      formData.append("name", values.name);
      formData.append("url", values.url);
      formData.append("corporate_logo", values.corporate_logo);
      const res = await createItem(formData);
      if (res.status === 201)
        router.push(`/admin/corporates/${res.data.corporate_id}`);
      console.log(res);
    },
  });
  return <ContentPageContainer>
    <form onSubmit={formik.handleSubmit} ref={formRef}>
      <Typography variant={"h4"} mb={3}>
        Create a new Corporate
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
          <Errors formik={formik}/>
        </Stack>
        <Box
          flex={3}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <TextField
            label={"Name"}
            fullWidth
            name={"name"}
            error={formik.touched.name && formik.errors.name ? true : false}
            helperText={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""
            }
            onChange={formik.handleChange}
            value={formik.values.name ?? ""}
            onBlur={formik.handleBlur}
            sx={{
              mb: 3,
            }}
          />
          <TextField
            label={"Url"}
            fullWidth
            name={"url"}
            error={formik.touched.url && formik.errors.url ? true : false}
            helperText={
              formik.touched.url && formik.errors.url
                ? formik.errors.url
                : ""
            }
            onChange={formik.handleChange}
            value={formik.values.url ?? ""}
            onBlur={formik.handleBlur}
            sx={{mb: 3}}
          />
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              type="file"
              sx={{display: "none"}}
              name={"corporate_logo"}
              onChange={(e) =>
                formik.setFieldValue("corporate_logo", e.target.files[0])
              }
              onBlur={formik.handleBlur}
            />
            <Button variant="contained" component={"span"}>
              {(formik.errors.corporate_logo && (
                <span>{formik.errors.corporate_logo}</span>
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
          <Link href={"/admin/corporates"}>
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
export default CreateCorporateForm