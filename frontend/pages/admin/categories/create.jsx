import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  ContentPageContainer,
  ContentPageFlexBox,
} from "../../../components/dashboard/layout/ContentPage/ContentPageContainer";
import { useFormik } from "formik";
import { CategorySchemaCreate } from "../../../components/dashboard/schemas/CategorySchema";
import Link from "next/link";
import axios from "../../../config/axios";
import {
  errorAlertAction,
  notificationContext,
  successAlertAction,
} from "../../../context/NotificationsContext";
import { useContext } from "react";
import { useRouter } from "next/router";

const Create = () => {
  const [notify, dispatch] = useContext(notificationContext);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name_ar: "",
      name_en: "",
      visible: "HIDDEN",
    },
    onSubmit: async (values) => {
      try {
        const res = await axios.post("/categories", values);
        console.log(res);
        dispatch(successAlertAction("Category created successfully"));
        router.push("/admin/categories/" + res.data.category_id);
      } catch (e) {
        console.log(e);
        dispatch(errorAlertAction("Category creation failed"));
      }
    },
    validationSchema: CategorySchemaCreate,
  });
  return (
    <ContentPageContainer>
      <Typography variant={"h4"} mb={3}>
        Create a new Category
      </Typography>
      <ContentPageFlexBox>
        <Stack direction={"column"} height={"100%"} spacing={2} flex={2} my={2}>
          <Typography variant={"h6"}>Basic information</Typography>
          {formik.errors && (
            <Typography variant={"body1"} color={"error"}>
              {Object.values(formik.errors).join("\n")}
            </Typography>
          )}
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
                  formik.touched.name_en && formik.errors.name_en ? true : false
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
                  formik.touched.name_ar && formik.errors.name_ar ? true : false
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
                <Button
                  type={"submit"}
                  variant={"contained"}
                  color={"success"}
                  size={"large"}
                  style={{ margin: "10px" }}
                >
                  Create
                </Button>
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
              </Box>
            </Stack>
          </form>
        </Box>
      </ContentPageFlexBox>
    </ContentPageContainer>
  );
};
Create.layout = "L3";
export default Create;
