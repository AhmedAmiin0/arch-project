import {
    Box,
    Button,
    FormControl,
    Input,
    InputLabel,
    MenuItem,
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
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useCreate } from "../../../hooks/useCRUD";
import { LangSwitch } from "../../../components/dashboard/layout/Buttons/LocaleSwitch/LocaleSwitch";
import axios from "../../../config/axios";

const ProjectSentence = ({ sentence }) => {
    const formRef = useRef(null);
    const router = useRouter();
    const { locale } = router;
    const [lang, setLang] = useState('EN');
    const { createItem } = useCreate(locale, 'project_sentence');
    const formik = useFormik({
        initialValues: {
            title: {
                en: sentence?.title?.en,
                ar: sentence?.title?.ar,
            },
            description: {
                en: sentence?.description?.en,
                ar: sentence?.description?.ar,
            },
            subtitle: {
                en: sentence?.subtitle?.en,
                ar: sentence?.subtitle?.ar,
            },
        },
        onSubmit: async (values) => {
            const res = await createItem(values);
        },
    });
    return <ContentPageContainer>
        <form onSubmit={formik.handleSubmit} ref={formRef}>
            <Typography variant={'h4'} mb={3}>Project sentence</Typography>
            <ContentPageFlexBox
            >
                <Stack
                    direction={'column'}
                    height={'100%'}
                    spacing={2}
                    flex={2}
                    my={2}
                >
                    <Typography variant={'h6'}>
                        Basic information
                    </Typography>
                    <Stack direction={'row'} spacing={2}>
                        <LangSwitch lang={lang} setLang={setLang} />
                    </Stack>
                </Stack>
                <Box flex={3} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
                >
                    {lang == 'EN' ? <><TextField
                        label="Title (EN)"
                        fullWidth
                        name="title"
                        value={formik.values.title?.en}
                        onChange={(e) => formik.setFieldValue('title.en', e.target.value)}
                        onBlur={(e) => formik.setFieldTouched('title.en', true)}
                        error={formik.touched.title?.en && formik.errors.title?.en ? true : false}
                        helperText={formik.touched.title?.en && formik.errors.title?.en ? formik.errors.title?.en : ''}
                        sx={{ mb: 3 }}
                    />
                        <TextField
                            label="Subtitle (EN)"
                            fullWidth
                            name="subtitle"
                            value={formik.values.subtitle?.en}
                            onChange={(e) => formik.setFieldValue('subtitle.en', e.target.value)}
                            onBlur={(e) => formik.setFieldTouched('subtitle.en', true)}
                            error={formik.touched.subtitle?.en && formik.errors.subtitle?.en ? true : false}
                            helperText={formik.touched.subtitle?.en && formik.errors.subtitle?.en ? formik.errors.subtitle?.en : ''}
                            sx={{ mb: 3 }}
                        />
                        <TextField
                            label="Description (EN)"
                            fullWidth
                            name="description"
                            value={formik.values.description?.en}
                            onChange={(e) => formik.setFieldValue('description.en', e.target.value)}
                            onBlur={(e) => formik.setFieldTouched('description.en', true)}
                            error={formik.touched.description?.en && formik.errors.description?.en ? true : false}
                            helperText={formik.touched.description?.en && formik.errors.description?.en ? formik.errors.description?.en : ''}
                            sx={{ mb: 3 }}
                        /></> : <><TextField
                            label="Title (AR)"
                            fullWidth
                            name="title"
                            value={formik.values.title?.ar}
                            onChange={(e) => formik.setFieldValue('title.ar', e.target.value)}
                            onBlur={(e) => formik.setFieldTouched('title.ar', true)}
                            error={formik.touched.title?.ar && formik.errors.title?.ar ? true : false}
                            helperText={formik.touched.title?.ar && formik.errors.title?.ar ? formik.errors.title?.ar : ''}
                            sx={{ mb: 3 }}
                        />
                        <TextField
                            label="Subtitle (AR)"
                            fullWidth
                            name="subtitle"
                            value={formik.values.subtitle?.ar}
                            onChange={(e) => formik.setFieldValue('subtitle.ar', e.target.value)}
                            onBlur={(e) => formik.setFieldTouched('subtitle.ar', true)}
                            error={formik.touched.subtitle?.ar && formik.errors.subtitle?.ar ? true : false}
                            helperText={formik.touched.subtitle?.ar && formik.errors.subtitle?.ar ? formik.errors.subtitle?.ar : ''}
                            sx={{ mb: 3 }}
                        />
                        <TextField
                            label="Description (AR)"
                            fullWidth
                            name="description"
                            value={formik.values.description?.ar}
                            onChange={(e) => formik.setFieldValue('description.ar', e.target.value)}
                            onBlur={(e) => formik.setFieldTouched('description.ar', true)}
                            error={formik.touched.description?.ar && formik.errors.description?.ar ? true : false}
                            helperText={formik.touched.description?.ar && formik.errors.description?.ar ? formik.errors.description?.ar : ''}
                            sx={{ mb: 3 }}
                        /></>}
                </Box>
            </ContentPageFlexBox>
            <ContentPageFlexBox>
                <Stack flex={2}>
                    <Typography variant={'h6'} my={2}>
                        Actions
                    </Typography>
                </Stack>
                <Stack flex={3} justifyContent={'center'} direction={'row'} alignItems={'center'} spacing={2}>
                    <Link href={'/admin/projects'}>
                        <Button variant="outlined" component={'a'} color="error"
                            startIcon={<CloseIcon />}>Cancel</Button>
                    </Link>
                    <Button type={'submit'} variant="outlined" color="primary"
                        startIcon={<DoneIcon />}>Save</Button>
                </Stack>
            </ContentPageFlexBox>
        </form>
    </ContentPageContainer>

}
ProjectSentence.layout = 'L3'
export default ProjectSentence;
export async function getStaticProps() {
    const sentence = await axios.get('project_sentence').then(res => res.data) ?? {};
    return {
        props: {
            sentence
        },
    }
}