import {
  Box,
  Button,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Errors from "../../../Errors";
import {ContentPageFlexBox} from "../../../layout/ContentPage/ContentPageContainer";
import DoneIcon from "@mui/icons-material/Done";
import {useFormik} from "formik";
import {UserSchemaEdit} from "../../../schemas/UserSchema";
import {useContext, useRef} from "react";
import {useRouter} from "next/router";
import {useCreate} from "../../../../../hooks/useCRUD";
import {GlobalContext, SetUserData} from "../../../layout/Layout";

function UserProfileInfo() {
  const formRef = useRef(null);
  const router = useRouter();
  const [globalData, setGlobalData] = useContext(GlobalContext);
  const {createItem} = useCreate(router.locale, "profile");
  const formik = useFormik({
    initialValues: {
      name: globalData?.user?.name,
      email: globalData?.user?.email,
      avatar: globalData?.user?.avatar,
    },
    validationSchema: UserSchemaEdit,
    onSubmit: async (values) => {
      const formData = new FormData(formRef.current);
      if (
        values.avatar &&
        typeof values.avatar === "object" &&
        values.avatar.size > 0
      )
        formData.append("avatar", values.avatar);
      formData.append("_method", "PUT");
      const res = await createItem(formData);
      if (res.status === 200) {
        setGlobalData(SetUserData(res?.data?.user));
        // console.log(res)
      }
      console.log(globalData);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} ref={formRef}>
      <Typography variant={"h4"} mb={3}>
        Show user
      </Typography>
      <ContentPageFlexBox>
        <Stack direction={"column"} height={"100%"} spacing={2} flex={2} my={2}>
          <Typography variant={"h6"}>Basic information</Typography>
          <Errors formik={formik}/>
        </Stack>
        <Stack
          flex={3}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
        >
          <TextField
            label="name"
            name="name"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps("name")}
            onBlur={formik.handleBlur}
          />
          <TextField
            label="email"
            name="email"
            variant="outlined"
            fullWidth
            type="email"
            {...formik.getFieldProps("email")}
            onBlur={formik.handleBlur}
          />
          <Box position={"relative"} width={"100%"} height={"100%"}>
            {formik.values.avatar.length != 0 && (
              <img
                src={
                  formik.values.avatar?.src
                    ? formik.values.avatar?.src
                    : formik.values.avatar == ""
                      ? ""
                      : URL.createObjectURL(formik.values.avatar)
                }
                alt=""
                width="100%"
                height="100%"
              />
            )}
          </Box>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              type="file"
              sx={{display: "none"}}
              name={"avatar"}
              onChange={(e) =>
                formik.setFieldValue("avatar", e.target.files[0])
              }
              onBlur={formik.handleBlur}
            />
            <Button variant="contained" component={"span"}>
              {(formik.errors.avatar && (
                <span>{formik.errors.avatar}</span>
              )) || <span>Upload Avatar</span>}
            </Button>
          </label>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DoneIcon/>}
            type="submit"
          >
            Save
          </Button>
        </Stack>
      </ContentPageFlexBox>
    </form>
  );
}

export default UserProfileInfo;



