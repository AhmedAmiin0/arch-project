import {
  Avatar,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import axios from "../../../../config/axios";
import { useState } from "react";
import Link from "next/link";

const ResetPassword = ({ globalData }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      let res = {};
      setLoading(true);
      setError(null);
      setSuccess(null);
      try {
        res = await axios.post("/password/email", values);
        setSuccess(res.data.message);
        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    },
  });
  return (
    <Stack
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
          <Avatar src={globalData.logo.src} alt={globalData.logo.alt} />
          <Link href="/admin/login">
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h2"
              sx={{
                cursor: "pointer",
                mb: 1,
              }}
            >
              Log in
            </Typography>
          </Link>
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
            {loading ? <CircularProgress size={30} /> : "Login"}
          </Button>
          <Typography
            variant="body1"
            color="error"
            display={error ? "block" : "none"}
          >
            {error}
          </Typography>
          <Typography
            display={success ? "block" : "none"}
            variant="subtitle1"
            color="success.light"
          >
            {success}
          </Typography>
        </Stack>
      </form>
    </Stack>
  );
};
export default ResetPassword;
