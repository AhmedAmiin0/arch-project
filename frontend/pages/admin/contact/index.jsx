import { Box, Stack, TextField, Typography } from "@mui/material";
import { LangSwitch } from "../../../components/dashboard/layout/Buttons/LocaleSwitch/LocaleSwitch";
import {
  ContentPageContainer,
  ContentPageFlexBox,
} from "../../../components/dashboard/layout/ContentPage/ContentPageContainer";
import axios from "../../../config/axios";

const ContactUsPage = ({ contact }) => {
  const formRef = useRef(null);
  const router = useRouter();
  const [lang, setLang] = useState("EN");
  const { createItem } = useCreate(lang.toLowerCase(), "page/contact");
  const formik = useFormik({
    initialValues: {
      title: { en: contact?.title?.en || "", ar: contact?.title?.ar || "" },
      subtitle: {
        en: contact?.subtitle?.en || "",
        ar: contact?.subtitle?.ar || "",
      },
      contact_details: {
        en: contact?.contact_details?.en || "",
        ar: contact?.contact_details?.ar || "",
      },
      location: ''
    },
    onSubmit: async (values) => {
      let res = await createItem(values);
      console.log(res);
    },
  });

  return (
    <ContentPageContainer>
      <form onSubmit={formik.handleSubmit} ref={formRef}>
        <Typography variant={"h4"} mb={3}>
          Contact
        </Typography>
        <ContentPageFlexBox>
          <Stack flex={2} direction={"column"} spacing={2}>
            <Typography variant={"h6"}>Basic information</Typography>
            <Stack direction={"row"} spacing={2}>
              <LangSwitch lang={lang} setLang={setLang} />
            </Stack>
          </Stack>
          <Box
            flex={3}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {lang == "EN" ? (
              <>
                <TextField
                  id="title"
                  label="Title"
                  name="title"
                  {...formik.getFieldProps("title")}
                  onBlur={formik.handleBlur}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="subtitle"
                  label="Subtitle"
                  name="subtitle"
                  {...formik.getFieldProps("subtitle")}
                  onBlur={formik.handleBlur}
                  variant="outlined"
                  fullWidth
                />
                
                <TextField
                  id="contact_details"
                  label="Contact details"
                  name="contact_details"
                  {...formik.getFieldProps("contact_details")}
                  onBlur={formik.handleBlur}
                  variant="outlined"
                  fullWidth
                />
              </>
            ) : (
              <>
                <TextField
                  id="title"
                  label="Title"
                  name="title"
                  {...formik.getFieldProps("title")}
                  onBlur={formik.handleBlur}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="subtitle"
                  label="Subtitle"
                  name="subtitle"
                  {...formik.getFieldProps("subtitle")}
                  onBlur={formik.handleBlur}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="contact_details"
                  label="Contact details"
                  name="contact_details"
                  {...formik.getFieldProps("contact_details")}
                  onBlur={formik.handleBlur}
                  variant="outlined"
                  fullWidth
                />
              </>
            )}

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
ContactUsPage.layout = "L3";
export default ContactUsPage;
export async function getServerSideProps({ locale }) {
  let contact = await axios.get(`/page/contact`, {
    headers: { "Accept-Language": locale },
  });
  contact = contact.data || {};
  return {
    props: {
      contact,
    },
  };
}
