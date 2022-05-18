import {
  Box,
  Button,
  FormControl, Grid,
  Input,
  InputLabel,
  Link,
  MenuItem, Modal,
  Select, Stack,
  TextField,
  Typography
} from "@mui/material";
import {
  ContentPageContainer,
  ContentPageFlexBox
} from "../../../components/dashboard/layout/ContentPage/ContentPageContainer";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from "formik";
// import { homeSchemaHomePage } from "../../../components/dashboard/schemas/homeSchema";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import DeleteIcon from '@mui/icons-material/Delete';
import axios from "../../../config/axios";
import { useRef, useState } from "react";
import { GalleryModal } from "../../../components/dashboard/GalleryModel/GalleryModal";
import { useRouter } from "next/router";
import { LangSwitch } from "../../../components/dashboard/layout/Buttons/LocaleSwitch/LocaleSwitch";
import { useCreate } from "../../../hooks/useCRUD";


const HomePage = ({ home }) => {
  const formRef = useRef(null);
  const router = useRouter();
  const [lang, setLang] = useState("EN");
  const { createItem } = useCreate(lang.toLowerCase(), 'page/home');
  console.log(home);
  const formik = useFormik({
    initialValues: {
      title: { en: home?.title?.en || '', ar: home?.title?.ar || '' },
      subtitle: { en: home?.subtitle?.en || '', ar: home?.subtitle?.ar || '' },
      description: { en: home?.description?.en || '', ar: home?.description?.ar || '' },
      keywords: home?.keywords?.en,
      sentence_title: { en: home?.sentence_title?.en || '', ar: home?.sentence_title?.ar || '' },
      sentence_subtitle: { en: home?.sentence_subtitle?.en || '', ar: home?.sentence_subtitle?.ar || '' },
      sentence_description: { en: home?.sentence_description?.en || '', ar: home?.sentence_description?.ar || '' },
    },
    onSubmit: async values => {
      let res = await createItem(values);
      console.log(res);
    },
  });

  return <ContentPageContainer>
    <form onSubmit={formik.handleSubmit} ref={formRef}>
      <Typography variant={'h4'} mb={3}>Home</Typography>
      <ContentPageFlexBox>
        <Stack flex={2} direction={'column'}
          spacing={2}
        >
          <Typography variant={'h6'} >
            Basic information
          </Typography>
          <Stack direction={'row'} spacing={2}>
            <LangSwitch lang={lang} setLang={setLang}

            />
          </Stack>
        </Stack>
        <Box flex={3} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
          {lang == 'EN' ? <>
            <TextField
              id="title"
              label="Title"
              name="title"
              value={formik.values.title?.en}
              onChange={(e) => formik.setFieldValue('title', { en: e.target.value, ar: formik.values.title?.ar })}
              onBlur={formik.handleBlur}
              variant="outlined"
              fullWidth
              sx={{ my: 2 }}
            />
            <TextField
              id="subtitle"
              label="Subtitle"
              name="subtitle"
              value={formik.values.subtitle?.en}
              onChange={(e) => formik.setFieldValue('subtitle', { en: e.target.value, ar: formik.values.subtitle?.ar })}
              onBlur={formik.handleBlur}
              variant="outlined"
              fullWidth
              sx={{ my: 2 }}

            />
            <TextField
              id="description"
              label="Description"
              name="description"
              value={formik.values.description?.en}
              onChange={(e) => formik.setFieldValue('description', { en: e.target.value, ar: formik.values.description?.ar })}
              onBlur={formik.handleBlur}
              variant="outlined"
              fullWidth
              sx={{ my: 2 }}
              multiline={true}
              rows={6}

            />
            <TextField
              id="sentence_title"
              label="sentence_title"
              name="sentence_title"
              value={formik.values.sentence_title?.en}
              onChange={(e) => formik.setFieldValue('sentence_title', { en: e.target.value, ar: formik.values.sentence_title?.ar })}
              onBlur={formik.handleBlur}
              variant="outlined"
              fullWidth
              sx={{ my: 2 }}

            />
            <TextField
              id="sentence_subtitle"
              label="sentence_subtitle"
              name="sentence_subtitle"
              value={formik.values.sentence_subtitle?.en}
              onChange={(e) => formik.setFieldValue('sentence_subtitle', { en: e.target.value, ar: formik.values.sentence_subtitle?.ar })}
              onBlur={formik.handleBlur}
              variant="outlined"
              fullWidth
              sx={{ my: 2 }}
            />
            <TextField
              id="sentence_description"
              label="sentence_description"
              name="sentence_description"
              value={formik.values.sentence_description?.en}
              onChange={(e) => formik.setFieldValue('sentence_description', { en: e.target.value, ar: formik.values.sentence_description?.ar })}
              onBlur={formik.handleBlur}
              variant="outlined"
              fullWidth
              sx={{ my: 2 }}
              multiline={true}
              rows={6}



            />
          </> : <><TextField
            id="title"
            label="Title"
            name="title"
            value={formik.values.title?.ar}
            onChange={(e) => formik.setFieldValue('title', { en: formik.values.title?.en, ar: e.target.value })}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
            sx={{ my: 2 }}

          />
            <TextField
              id="subtitle"
              label="Subtitle"
              name="subtitle"
              value={formik.values.subtitle?.ar}
              onChange={(e) => formik.setFieldValue('subtitle', { en: formik.values.subtitle?.en, ar: e.target.value })}
              onBlur={formik.handleBlur}
              variant="outlined"
              fullWidth
              sx={{ my: 2 }}
            />
            <TextField
              id="description"
              label="Description"
              name="description"
              value={formik.values.description?.ar}
              onChange={(e) => formik.setFieldValue('description', { en: formik.values.description?.en, ar: e.target.value })}
              onBlur={formik.handleBlur}
              variant="outlined"
              fullWidth
              sx={{ my: 2 }}
              multiline={true}
              rows={6}
            />

            <TextField
              id="sentence_title"
              label="sentence_title"
              name="sentence_title"
              value={formik.values.sentence_title?.ar}
              onChange={(e) => formik.setFieldValue('sentence_title', { en: formik.values.sentence_title?.en, ar: e.target.value })}
              onBlur={formik.handleBlur}
              variant="outlined"
              fullWidth
              sx={{ my: 2 }}

            />
            <TextField
              id="sentence_subtitle"
              label="sentence_subtitle"
              name="sentence_subtitle"
              value={formik.values.sentence_subtitle?.ar}
              onChange={(e) => formik.setFieldValue('sentence_subtitle', { en: formik.values.sentence_subtitle?.en, ar: e.target.value })}
              onBlur={formik.handleBlur}
              variant="outlined"
              fullWidth
              sx={{ my: 2 }}
            />
            <TextField
              id="sentence_description"
              label="sentence_description"
              name="sentence_description"
              value={formik.values.sentence_description?.ar}
              onChange={(e) => formik.setFieldValue('sentence_description', { en: formik.values.sentence_description?.en, ar: e.target.value })}
              onBlur={formik.handleBlur}
              variant="outlined"
              fullWidth
              sx={{ my: 2 }}
              multiline={true}
              rows={6}
            />

          </>
          }
          <TextField
            id="keywords"
            label="Keywords"
            name="keywords"
            value={formik.values.keywords}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
            sx={{ my: 2 }}
            multiline={true}
            rows={6}
          />
        </Box>
      </ContentPageFlexBox>
      <ContentPageFlexBox>
        <Stack flex={2}>
          <Typography variant={'h6'} my={2}>
            Actions
          </Typography>
        </Stack>
        <Stack flex={3} justifyContent={'center'} direction={'row'} alignItems={'center'} spacing={2}>
          <Button type={'submit'} variant="contained" color="primary"
            startIcon={<DoneIcon />}>Save</Button>
        </Stack>
      </ContentPageFlexBox>
    </form>
    <ContentPageFlexBox>
      <GalleryModal
        initial={home.home_images}
        name={'home'}
      />
    </ContentPageFlexBox>
  </ContentPageContainer>
}
HomePage.layout = 'L3'
export default HomePage;

export async function getServerSideProps({ locale }) {
  const home = await axios.get('page/home/', {
    headers: { 'Accept-Language': locale }
  }).then(res => res.data) ?? {};
  return {
    props: { home }
  }
}