import {ContentPageContainer, ContentPageFlexBox} from "../../layout/ContentPage/ContentPageContainer";
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {LocaleSwitch} from "../../layout/Buttons/LocaleSwitch/LocaleSwitch";
import {GalleryModal} from "../../GalleryModel/GalleryModal";
import DoneIcon from "@mui/icons-material/Done";
import {useRef, useState} from "react";
import {useRouter} from "next/router";
import {useCreate} from "../../../../hooks/useCRUD";
import {useFormik} from "formik";

const EditHomeForm = ({home}) => {
  const formRef = useRef(null);
  const router = useRouter();
  const {locale} = router
  const [lang, setLang] = useState("EN");
  const {createItem} = useCreate(locale, "page/home");
  const formik = useFormik({
    initialValues: {
      title: home.title,
      subtitle: home.subtitle,
      description: home.description,
      keywords: home.keywords,
      sentence_title: home.sentence_title,
      sentence_subtitle: home.sentence_subtitle,
      sentence_description: home.sentence_description,
    },
    onSubmit: async (values) => {
      let res = await createItem(values);
    },
  });

  return <ContentPageContainer>
    <form onSubmit={formik.handleSubmit} ref={formRef}>
      <Typography variant={"h4"} mb={3}>
        Home
      </Typography>
      <ContentPageFlexBox>
        <Stack flex={2} direction={"column"} spacing={2}>
          <Typography variant={"h6"}>Basic information</Typography>
          <Stack direction={"row"} spacing={2}>
            <LocaleSwitch lang={locale}/>
          </Stack>
        </Stack>
        <Box
          flex={3}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >

          <TextField
            id="title"
            label="Title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
            sx={{my: 2}}
          />
          <TextField
            id="subtitle"
            label="Subtitle"
            name="subtitle"
            value={formik.values.subtitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
            sx={{my: 2}}
          />
          <TextField
            id="description"
            label="Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
            sx={{my: 2}}
            multiline={true}
            rows={6}
          />
          <TextField
            id="sentence_title"
            label="sentence_title"
            name="sentence_title"
            value={formik.values.sentence_title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
            sx={{my: 2}}
          />
          <TextField
            id="sentence_subtitle"
            label="sentence_subtitle"
            name="sentence_subtitle"
            value={formik.values.sentence_subtitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
            sx={{my: 2}}
          />
          <TextField
            id="sentence_description"
            label="sentence_description"
            name="sentence_description"
            value={formik.values.sentence_description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
            sx={{my: 2}}
            multiline={true}
            rows={6}
          />

          <TextField
            id="keywords"
            label="Keywords"
            name="keywords"
            value={formik.values.keywords}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
            sx={{my: 2}}
            multiline={true}
            rows={6}
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
    <ContentPageFlexBox>
      <GalleryModal initial={home.home_images} name={"home"}/>
    </ContentPageFlexBox>
  </ContentPageContainer>

}
export default EditHomeForm