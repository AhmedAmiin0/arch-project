import {Stack, Typography} from "@mui/material";
import cookies from "next-cookies";
import {ContentPageFlexBox} from "../../components/dashboard/layout/ContentPage/ContentPageContainer";
import Layout from "../../components/dashboard/layout/Layout";
import axios from "../../config/axios";
import OverviewGrid from "../../components/dashboard/OverviewCard";
import LatestFeedbacks from "../../components/dashboard/LatestFeedbacks";

const index = ({globalData}) => {
  return (
    <Layout data={globalData}>
      <Typography variant="h4" mb={3}>Dashboard Overview</Typography>
      <ContentPageFlexBox>
        <OverviewGrid
          projects={60}
          users={10}
          corporates={30}
          feedbacks={70}
        />
      </ContentPageFlexBox>
      {/*{data && (<Typography variant="h4" mb={3}>Latest Feedbacks</Typography>*/}
      {/*<ContentPageFlexBox>*/}
      {/*  <LatestFeedbacks data={data}/>*/}
      {/*</ContentPageFlexBox>)}*/}
    </Layout>
  );
};
export default index;
export const getServerSideProps = async (ctx) => {
  const {token} = cookies(ctx);
  const {locale} = ctx;
  if (!token || token === "" || token === null)
    return {
      redirect: {destination: "/admin/login"},
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
    props: {
      token,
      globalData,
    },
  };
};
