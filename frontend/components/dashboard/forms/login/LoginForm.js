import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {useState} from "react";
import useAuth from "../../../../hooks/useAuth";
import {useFormik} from "formik";
import {LoginSchema} from "../../schemas/LoginSchema";
import Errors from "../../Errors";


const LoginForm = ({
                     globalData
                   }) => {
  const [showPassword, setShowPassword] = useState(false);
  console.log(globalData)
  const {error, login, loading} = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const res = await login(values);
    },
    validationSchema: LoginSchema,
  });
  return <Stack
    sx={(theTheme) => ({
      padding: "32px",
      marginTop: "-100px",
      boxShadow: "rgb(0 0 0 / 24%) 0px 10px 15px",
      borderRadius: "8px",
      backgroundColor: "background.paper",
      width: "100%",
      [theTheme.breakpoints.up("md")]: {
        width: "600px",
      },
    })}
  >
    <form onSubmit={formik.handleSubmit}>
      <Stack
        mb={2}
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar src={globalData.logo.src} alt={globalData.logo.alt}/>
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h2"
          mb={1}
        >
          Log in
        </Typography>
        <Typography component={"span"} fontWeight={"100"}>
          Sign in on the internal platform
        </Typography>
      </Stack>
      <Stack gap={"10px"}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          name="email"
          mt={2}
          {...formik.getFieldProps("email")}
          type="email"
          error={formik.errors.email && formik.touched.email ? true : false}
        />
        <FormControl fullWidth variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-password"
            error={formik.errors.password && formik.touched.password}
          >
            Password
          </InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            {...formik.getFieldProps("password")}
            error={formik.errors.password && formik.touched.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff/> : <Visibility/>}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button
          sx={{
            marginTop: "10px",
            padding: "12px 16px",
          }}
          variant="contained"
          p={5}
          color="primary"
          type="submit"
          disabled={loading ? true : false}
        >
          {loading ? <CircularProgress size={30}/> : "Login"}
        </Button>
        <Errors formik={formik}/>
        <Typography
          variant="body1"
          color="error"
          display={error ? "block" : "none"}
        >
          {error}
        </Typography>
      </Stack>
    </form>
  </Stack>
}
export default LoginForm