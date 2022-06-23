import {Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography} from "@mui/material";
import {
  ContentPageContainer,
  ContentPageFlexBox
} from "../../../components/dashboard/layout/ContentPage/ContentPageContainer";
import {useFormik} from "formik";
import {CategorySchemaEdit} from "../../../components/dashboard/schemas/CategorySchema";
import Link from "next/link";
import axios from "../../../config/axios";
import {errorAlertAction, notificationContext, successAlertAction} from "../../../context/NotificationsContext";
import {useContext} from "react";
import {Delete} from "@mui/icons-material";
import DoneIcon from '@mui/icons-material/Done';
import {useRouter} from "next/router";
import {LocaleSwitch} from "../../../components/dashboard/layout/Buttons/LocaleSwitch/LocaleSwitch";
import cookies from "next-cookies";

const EditCategory = ({categories}) => {
  const [notify, dispatch] = useContext(notificationContext);
  const router = useRouter();
  const locale = router.locale
  const {id} = router.query;
  const handleDelete = async () => {
    try {
      await axios.delete(`categories/${id}`);
      dispatch(successAlertAction("Category deleted successfully"));
      router.push("/admin/categories");
    } catch (e) {
      dispatch(errorAlertAction("Error deleting categories"));
    }
  }
  // const formik = useFormik({
  //   initialValues: {
  //     name: categories?.data?.name,
  //     visible: categories?.data?.visible,
  //   },
  //   onSubmit: async values => {
  //     try {
  //       await axios.put("categories/" + id, values,{headers: {'Accept-Language': locale}});
  //       dispatch(successAlertAction("Category created successfully"))
  //     } catch (e) {
  //       console.log(e)
  //       dispatch(errorAlertAction('Category creation failed'))
  //     }
  //   },
  //   validationSchema: CategorySchemaEdit
  // })
  return <ContentPageContainer>
    <Typography variant={'h4'} mb={3}>Edit Category</Typography>
    <ContentPageFlexBox>
      <Stack
        direction={'column'}
        height={'100%'}
        spacing={2}
        flex={2}
        my={2}>
        <Typography variant={'h6'}>
          Basic information
        </Typography>
        <LocaleSwitch location={'categories/' + id} lang={locale}/>
        {formik.errors && (
              <Typography variant={"body1"} color={"error"}>
                {Object.values(formik.errors).join("\n")}
              </Typography>
            )}
      </Stack>
      <Box flex={3} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        {/* <form onSubmit={formik.handleSubmit}>
          <Stack
            direction={'column'}
            height={'100%'}
            spacing={2}
            flex={2}
            my={2}>
            <Typography variant={'h6'}>
              Name
            </Typography>
            <TextField
              variant={'outlined'}
              label={'Name'}
              fullWidth
              error={formik.touched.name && formik.errors.name ? true : false}
              helperText={formik.touched.name && formik.errors.name}
              name={'name'}
              {...formik.getFieldProps('name')}
            />
            <Typography variant={'h6'}>
              Visibility
            </Typography>
            <FormControl>
              <InputLabel id="demo-simple-select-helper-label">Visibility</InputLabel>
              <Select
                {...formik.getFieldProps('visible')}
                variant={'outlined'}
                fullWidth
                error={formik.touched.visible && formik.errors.visible}
                name={'visible'}
                label={'Visibility'}
                labelId={'demo-simple-select-helper-label'}
              >
                <MenuItem value={'HIDDEN'}>Hidden</MenuItem>
                <MenuItem value={'VISIBLE'}>Visible</MenuItem>
              </Select>
            </FormControl>
            <Box display={'flex'} justifyContent={'center'}>
              <Button
                type={'submit'}
                variant={'contained'}
                color={'success'}
                size={'large'}
                style={{margin: '10px'}}
                startIcon={<DoneIcon/>}
              >
                Save
              </Button>
              <Button
                component={'a'}
                variant={'contained'}
                color={'error'}
                size={'large'}
                style={{margin: '10px'}}
                endIcon={<Delete/>}
                onClick={handleDelete}
              >
                Delete
              </Button>
            </Box>
          </Stack>
        </form> */}
      </Box>
    </ContentPageFlexBox>
  </ContentPageContainer>
}
EditCategory.layout = 'L3';
export default EditCategory;

export async function getServerSideProps({params, locale} ) {
  const {id} = params;
  const categories = await axios.get('/categories/' + id, {headers: {'Accept-Language': locale}}).then(res => res.data) ?? {};
  return {props: {categories}}
}