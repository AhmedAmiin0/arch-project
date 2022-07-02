import {ContentPageContainer, ContentPageFlexBox} from "../../layout/ContentPage/ContentPageContainer";
import {Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography} from "@mui/material";
import Errors from "../../Errors";

import {useRouter} from "next/router";
import {useCreate} from "../../../../hooks/useCRUD";
import {useFormik} from "formik";
import {CategorySchemaCreate} from "../../schemas/CategorySchema";
import Link from "next/link";

const CreateCategoryForm = ()=>{
  const router = useRouter();
  const { createItem } = useCreate("en", "/categories");
  const formik = useFormik({
    initialValues: {
      name_ar: "",
      name_en: "",
      visible: "HIDDEN",
    },
    onSubmit: async (values) => {
      let res = await createItem(values);
      router.push("/admin/categories/"+res?.data.category_id);
    },
    validationSchema: CategorySchemaCreate,
  });
  return <ContentPageContainer>
        <Typography variant={"h4"} mb={3}>
          Create a new Category
        </Typography>
        <ContentPageFlexBox>
          <Stack
            direction={"column"}
            height={"100%"}
            spacing={2}
            flex={2}
            my={2}
          >
           <Errors formik={formik} />
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
                <Typography variant={"h6"}>English Name</Typography>
                <TextField
                  variant={"outlined"}
                  label={"English Name"}
                  fullWidth
                  error={
                    formik.touched.name_en && formik.errors.name_en
                      ? true
                      : false
                  }
                  helperText={formik.touched.name_en && formik.errors.name_en}
                  name={"name_en"}
                  {...formik.getFieldProps("name_en")}
                />
                <Typography variant={"h6"}>Arabic Name</Typography>
                <TextField
                  variant={"outlined"}
                  label={"Arabic Name"}
                  fullWidth
                  error={
                    formik.touched.name_ar && formik.errors.name_ar
                      ? true
                      : false
                  }
                  helperText={formik.touched.name_ar && formik.errors.name_ar}
                  name={"name_ar"}
                  {...formik.getFieldProps("name_ar")}
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
                  <Link href={"/admin/categories"}>
                    <Button
                      component={"a"}
                      variant={"contained"}
                      color={"error"}
                      size={"large"}
                      style={{ margin: "10px" }}
                    >
                      Cancel
                    </Button>
                  </Link>
                  <Button
                    type={"submit"}
                    variant={"contained"}
                    color={"success"}
                    size={"large"}
                    style={{ margin: "10px" }}
                  >
                    Create
                  </Button>

                </Box>
              </Stack>
            </form>
          </Box>
        </ContentPageFlexBox>
      </ContentPageContainer>

}
export default CreateCategoryForm