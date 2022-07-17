import Errors from "../../Errors";
import {
  ContentPageContainer,
  ContentPageFlexBox,
} from "../../layout/ContentPage/ContentPageContainer";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";
import { UserSchemaCreate } from "../../schemas/UserSchema";
import { useCreate } from "../../../../hooks/useCRUD";
const CreateUsersForm = () => {
  const formRef = useRef(null);
  const router = useRouter();
  const { createItem } = useCreate(router.locale, "users");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      avatar: '',
    },
    onSubmit: async (values) => {
      const formData = new FormData(formRef.current);
      formData.append("avatar", values.avatar);
      const res = await createItem(formData, true);
      if (res.status === 201) router.push(`/admin/users/${res.data.user.id}`);
      console.log(res);
    },
    validationSchema: UserSchemaCreate,
  });
  return (
    <ContentPageContainer>
      <form onSubmit={formik.handleSubmit} ref={formRef}>
        <Typography variant={"h4"} mb={3}>
          Create a new user
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
            <Errors formik={formik} />
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
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                {...formik.getFieldProps("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password Confirmation visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-passwordConfirmation">
                Password Confirmation
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-passwordConfirmation"
                type={showConfirmPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password Confirmation visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...formik.getFieldProps("passwordConfirmation")}
                label={"Password Confirmation"}
              />
            </FormControl>
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                type="file"
                sx={{ display: "none" }}
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
            <Box position={"relative"} width={"100%"} height={"100%"}>
              {formik.values.avatar.length != 0 && (
                <img
                  src={
                    URL.createObjectURL(formik.values.avatar)
                  }
                  alt=""
                  title=""
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                />
              )}
            </Box>
          </Stack>
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
            <Link href="/admin/users">
              <Button
                variant="outlined"
                component={"a"}
                color="error"
                startIcon={<CloseIcon />}
              >
                Cancel
              </Button>
            </Link>
            <Button
              type={"submit"}
              variant="outlined"
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
export default CreateUsersForm;
