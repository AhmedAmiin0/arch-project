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
// import { aboutSchemaAboutttttttPage } from "../../../components/dashboard/schemas/aboutSchema";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import DeleteIcon from '@mui/icons-material/Delete';
import axios from "../../../config/axios";
import { useRef, useState } from "react";
import { GalleryModal } from "../../../components/dashboard/GalleryModel/GalleryModal";
import { useRouter } from "next/router";
import { LangSwitch, LocaleSwitch } from "../../../components/dashboard/layout/Buttons/LocaleSwitch/LocaleSwitch";
import { useCreate } from "../../../hooks/useCRUD";
import Image from 'next/image';


const AboutPage = ({ about }) => {
  const formRef = useRef(null);
  const router = useRouter();
  // const [lang, setLang] = useState("EN");
  const { locale } = router;
  const { createItem } = useCreate(locale, 'page/about');
  console.log(about);
  const formik = useFormik({
    initialValues: {
      title: about?.title || '',
      subtitle: about?.subtitle || '',
      description: about?.description || '',
      keywords: about?.keywords || '',
      sentence_title: about?.sentence_title || '',
      sentence_subtitle: about?.sentence_subtitle || '',
      sentence_description: about?.sentence_description || '',
      first_section_title: about?.first_section_title || '',
      first_section_description: about?.first_section_description || '',
      first_section_subtitle: about?.first_section_subtitle || '',
      first_section_image: about?.first_section_image || '',
      // video_background: about?.video_background || '',
      video_url: about?.video_url || '',

    },
    onSubmit: async values => {
      const formData = new FormData(formRef.current);
      if (values.first_section_image && typeof values.first_section_image === 'object' && values.first_section_image.size > 0) {
        formData.append('first_section_image', values.first_section_image);
      }
      // if (values.video_background && typeof values.video_background === 'object' && values.video_background.size > 0) {
      //   formData.append('video_background', values.video_background);
      // }
      let res = await createItem(formData);
      console.log(res);
    },
  });
  console.log(formik.values);
  return <ContentPageContainer>
    <form onSubmit={formik.handleSubmit} ref={formRef}>
      <Typography variant={'h4'} mb={3}>About</Typography>
      <ContentPageFlexBox>
        <Stack flex={2} direction={'column'}
          spacing={2}
        >
          <Typography variant={'h6'} >
            Basic information
          </Typography>
          <Stack direction={'row'} spacing={2}>
            <LocaleSwitch lang={locale} />
          </Stack>
        </Stack>
        <Box flex={3} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>

          <TextField
            id="title"
            label="Title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
            sx={{ my: 2 }}
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
            sx={{ my: 2 }}

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
            sx={{ my: 2 }}
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
            sx={{ my: 2 }}

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
            sx={{ my: 2 }}
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
            sx={{ my: 2 }}
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
            sx={{ my: 2 }}
            multiline={true}
            rows={6}
          />

        </Box>
      </ContentPageFlexBox>
      <ContentPageFlexBox>
        <Typography variant="h6" gutterBottom
          flex={2}
        >
          Upload Image
        </Typography>
        <Box flex={3} justifyContent={'center'} alignItems={'center'} >
          <TextField
            id='first_section_title'
            label='First Section Title'
            name='first_section_title'
            value={formik.values.first_section_title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
            sx={{ my: 2 }}
          />
          <TextField
            id='first_section_subtitle'
            label='First Section Subtitle'
            name='first_section_subtitle'
            value={formik.values.first_section_subtitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
            sx={{ my: 2 }}
          />
          <TextField
            id='first_section_description'
            label='First Section Description'
            name='first_section_description'
            value={formik.values.first_section_description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
            sx={{ my: 2 }}
            multiline={true}
            rows={6}
          />
          {formik.values.first_section_image && <Image
            src={formik.values.first_section_image.src ?? URL.createObjectURL(formik.values.first_section_image)}
            alt="" title="" width="100%" height="100%" layout="responsive" objectFit="contain" />}


          <label htmlFor="contained-button-file" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            <input accept="image/*" id="contained-button-file" type="file" style={{ display: 'none', }}
              name={'first_section_image'}
              onChange={(e) => formik.setFieldValue('first_section_image', e.target.files[0])}
            />
            <Button variant="contained" component="div" my={2}>
              {formik.values.first_section_image ?
                <span>Image was Chosen</span> : 'Upload Thumbnail'}
            </Button>
          </label>


        </Box>
      </ContentPageFlexBox>
      <ContentPageFlexBox>
        <Typography variant="h6" gutterBottom
          flex={2}
        >
          Link Video
        </Typography>
        <Box flex={3} justifyContent={'center'} alignItems={'center'}>
          <TextField
            id='video_url'
            label='Video Link'
            name='video_url'
            value={formik.values.video_url}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
            sx={{ my: 2 }}
          />
          {/* {formik.values.video_background && <img
            src={formik.values.video_background.src ?? URL.createObjectURL(formik.values.video_background)}
            alt={'video_background'} width={'100%'} />}
          <label htmlFor="contained-button-file" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            <Input accept="image/*" id="contained-button-file" type="file" sx={{ display: 'none', }}
              name={'video_background'}
              onChange={(e) => formik.setFieldValue('video_background', e.target.files[0])}
            />
            <Button variant="contained" component="div" my={2}>
              {formik.values.video_background ?
                <span>Image was Chosen</span> : 'Upload Thumbnail'}
            </Button>
          </label> */}
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
  </ContentPageContainer>
}
AboutPage.layout = 'L3'
export default AboutPage;

export async function getServerSideProps({ locale }) {
  const about = await axios.get('page/about/', {
    headers: { 'Accept-Language': locale }
  }).then(res => res.data?.data) ?? {};
  return {
    props: { about }
  }
}