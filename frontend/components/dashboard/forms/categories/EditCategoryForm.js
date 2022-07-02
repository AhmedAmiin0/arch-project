import {ContentPageContainer, ContentPageFlexBox} from "../../layout/ContentPage/ContentPageContainer";
import {Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography} from "@mui/material";
import {LocaleSwitch} from "../../layout/Buttons/LocaleSwitch/LocaleSwitch";
import Errors from "../../Errors";
import DoneIcon from '@mui/icons-material/Done';
import Delete from '@mui/icons-material/Delete';
import {useFormik} from "formik";
import {CategorySchemaEdit} from "../../schemas/CategorySchema";
import {useCreate, useDelete} from "../../../../hooks/useCRUD";
import {useRouter} from "next/router";

export default function EditCategoryForm({categories}) {
  const router = useRouter()
  const { id } = router.query;
  const {locale} = router
  const {deleteItem} = useDelete(locale);
  const {createItem} = useCreate(locale, "/categories/" + id);
  const formik = useFormik({
    initialValues: {
      name: categories?.data?.name,
      visible: categories?.data?.visible,
    },
    onSubmit: async (values) => {
      const formData = new FormData()
      formData.append('name', values.name)
      formData.append('visible', values.visible)
      formData.append('_method', 'PUT')
      await createItem(formData)
    },
    validationSchema: CategorySchemaEdit,
  });
  return <ContentPageContainer>
    <Typography variant={"h4"} mb={3}>
      Edit Category
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
        <LocaleSwitch location={"categories/" + id} lang={locale}/>
        <Errors formik={formik}/>
      </Stack>
      <Box
        flex={3}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <form onSubmit={formik.handleSubmit}>
          <Stack
            direction={"column"}
            height={"100%"}
            spacing={2}
            flex={2}
            my={2}
          >
            <Typography variant={"h6"}>Name</Typography>
            <TextField
              variant={"outlined"}
              label={"Name"}
              fullWidth
              error={
                formik.touched.name && formik.errors.name ? true : false
              }
              helperText={formik.touched.name && formik.errors.name}
              name={"name"}
              {...formik.getFieldProps("name")}
            />
            <Typography variant={"h6"}>Visibility</Typography>
            <FormControl>
              <InputLabel id="demo-simple-select-helper-label">
                Visibility
              </InputLabel>
              <Select
                {...formik.getFieldProps("visible")}
                variant={"outlined"}
                fullWidth
                error={formik.touched.visible && formik.errors.visible}
                name={"visible"}
                label={"Visibility"}
                labelId={"demo-simple-select-helper-label"}
              >
                <MenuItem value={"HIDDEN"}>Hidden</MenuItem>
                <MenuItem value={"VISIBLE"}>Visible</MenuItem>
              </Select>
            </FormControl>
            <Box display={"flex"} justifyContent={"center"}>
              <Button
                component={"a"}
                variant={"contained"}
                color={"error"}
                size={"large"}
                style={{margin: "10px"}}
                endIcon={<Delete/>}
                onClick={async () => await deleteItem('categories', id)}
              >
                Delete
              </Button>
              <Button
                type={"submit"}
                variant={"contained"}
                color={"success"}
                size={"large"}
                style={{margin: "10px"}}
                startIcon={<DoneIcon/>}
              >
                Save
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </ContentPageFlexBox>
  </ContentPageContainer>

}