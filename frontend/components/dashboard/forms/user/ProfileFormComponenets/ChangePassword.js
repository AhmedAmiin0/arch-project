import {
  FormControl,
  InputLabel,
  Stack,
  Typography,
  OutlinedInput,
  IconButton,
  InputAdornment,
  Button,
} from "@mui/material";
import Errors from "../../../Errors";
import { ContentPageFlexBox } from "../../../layout/ContentPage/ContentPageContainer";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRef, useState } from "react";
import { useCreate } from "../../../../../hooks/useCRUD";
import { useFormik } from "formik";
import { UserPasswordSchema } from "../../../schemas/UserSchema";
import { useRouter } from "next/router";
import DoneIcon from "@mui/icons-material/Done";

export default function ChangePassword() {
  const router = useRouter();
  const passwordFormRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const { createItem } = useCreate(router.locale, "password_change");
  const passwordFormik = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: UserPasswordSchema,
    onSubmit: async (values) => {
      const formData = new FormData(passwordFormRef.current);
      formData.append("_method", "PUT");
      const res = await createItem(formData);
    },
  });

  return (
    <form onSubmit={passwordFormik.handleSubmit} ref={passwordFormRef}>
      <ContentPageFlexBox>
        <Stack flex={2} mb={2}>
          <Typography variant={"h6"}>Change password</Typography>
          <Errors formik={passwordFormik} />
        </Stack>

        <Stack
          flex={3}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
        >
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              {...passwordFormik.getFieldProps("password")}
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
              {...passwordFormik.getFieldProps("passwordConfirmation")}
              name="passwordConfirmation"
              label={"Password Confirmation"}
            />
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DoneIcon />}
            type="submit"
          >
            Save
          </Button>
        </Stack>
      </ContentPageFlexBox>
    </form>
  );
}


