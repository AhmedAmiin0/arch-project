import {ContentPageContainer, ContentPageFlexBox} from "../../layout/ContentPage/ContentPageContainer";
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {LocaleSwitch} from "../../layout/Buttons/LocaleSwitch/LocaleSwitch";
import {Editor} from "../../Editor/RichEditor";
import DoneIcon from '@mui/icons-material/Done';
import {useRef} from "react";
import {useRouter} from "next/router";
import {useCreate} from "../../../../hooks/useCRUD";
import {useFormik} from "formik";
import Errors from "../../Errors";

const ContactUsPageForm = ({contact}) => {
  const formRef = useRef(null);
  const router = useRouter();
  const {locale} = router;
  console.log(locale)
  const {createItem} = useCreate(locale, "page/contact");
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
  return <ContentPageContainer>
    <form onSubmit={formik.handleSubmit} ref={formRef}>
      <Typography variant={"h4"} mb={3}>
        Contact
      </Typography>
      <ContentPageFlexBox>
        <Stack flex={2} direction={"column"} spacing={2}>
          <Typography variant={"h6"}>Basic information</Typography>
          <Stack direction={"row"} spacing={2}>
            <LocaleSwitch lang={locale}/>
          </Stack>
          <Errors formik={formik}/>
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
            startIcon={<DoneIcon/>}
          >
            Save
          </Button>
        </Stack>
      </ContentPageFlexBox>
    </form>
  </ContentPageContainer>
}
export default ContactUsPageForm