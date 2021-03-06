import { useRouter } from "next/router";
import ListingComponent from "../../../components/dashboard/ListingPage/ListingPage";

const Category = () => {
  const router = useRouter();
  const { locale } = router;
  const columns = [
    { field: "name", headerName: "Name", width: 300 },
    {
      field: "visible",
      headerName: "Visible",
      type: "singleSelect",
      valueOptions: ["VISIBLE", "HIDDEN"],
      width: 220,
    },
  ];
  return (
    <ListingComponent
      cols={columns}
      locale={locale}
      page_title_plural="categories"
      page_title_single="category"
      api_url="categories"
    />
  );
};
Category.layout = "L3";
export default Category;
