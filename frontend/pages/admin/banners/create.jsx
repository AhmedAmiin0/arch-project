import {
  Box,
  Button,
  FormControl,
  Input,
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
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import axios from "../../../config/axios";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { LangSwitch } from "../../../components/dashboard/layout/Buttons/LocaleSwitch/LocaleSwitch";
import { useCreate } from "../../../hooks/useCRUD";
import { BannerSchemaCreate } from "../../../components/dashboard/schemas/BannerSchema";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import CreateBannerForm from "../../../components/dashboard/forms/banners/CreateBannerForm";

const CreateBanner = ({ globalData }) => {

  return (
    <Layout data={globalData}>
      <CreateBannerForm />
    </Layout>
  );
};
export default CreateBanner;
export async function getServerSideProps(ctx) {
  const { token } = cookies(ctx);
  const { locale } = ctx;
  if (!token || token === "" || token === null)
    return {
      redirect: { destination: "/admin/login" },
    };
  const globalData = await axios
    .get("/global", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data.data ?? {});

  return {
    props: { globalData },
  };
}
