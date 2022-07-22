import { Box, Button, OutlinedInput, Stack, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect, useMemo, useState } from "react";
import debouce from "lodash.debounce";
import { useRouter } from "next/router";
import { LocaleSwitch } from "../../../components/dashboard/layout/Buttons/LocaleSwitch/LocaleSwitch";
import { useQuery } from "../../../hooks/useQuery";
import ServerPaginationTable from "../../../components/dashboard/DataGrid/ServerSideTable";

const ListingComponent = ({
  cols,
  locale,
  page_title_plural,
  page_title_single,
  api_url = page_title_plural,
  url = page_title_plural,
  HasSentence = false,
  rowHeight = 100,
  readOnlyList = false,
  canAdd = true,

  // sentence_url = null
}) => {
  const router = useRouter();
  const [rowsState, setRowsState] = useState({
    page: 1,
    pageSize: 10,
  });
  const { data, isLoading, rowCount, setQuery, handleDelete } = useQuery(
    api_url,
    rowsState.page,
    rowsState.pageSize,
    locale
  );
  const handleChange = async (e) => setQuery(() => e.target.value);
  const [rowCountState, setRowCountState] = useState(rowCount || 1);
  useEffect(() => {
    setRowCountState((prevRowCountState) =>
      rowCount !== undefined ? rowCount : prevRowCountState
    );
  }, [rowCount, setRowCountState]);

  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 300);
  }, []);
  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });
  const columns = [
    ...cols,
    {
      field: "actions",
      headerAlign: "Actions",
      sortable: false,
      filterable: false,
      width: 140,
      renderCell: (params) => (
        <Stack
          direction={"row"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            sx={{ borderRadius: "50%", padding: "10px", minWidth: "unset" }}
            color={readOnlyList ? "primary" : "warning"}
            onClick={() => router.push(`${url}/${params.id}`)}
          >
            {readOnlyList ? (
              <VisibilityIcon sx={{ fontSize: "1em" }} />
            ) : (
              <EditIcon sx={{ fontSize: "1em" }} />
            )}
          </Button>
          <Button
            sx={{ borderRadius: "50%", padding: "10px", minWidth: "unset" }}
            onClick={() => handleDelete(params.id)}
            color="error"
          >
            <DeleteIcon sx={{ fontSize: "1em" }} />
          </Button>
        </Stack>
      ),
    },
  ];
  return (
    <Box>
      <Stack
        mb={4}
        direction={{
          md: "row",
          xs: "column",
        }}
        justifyContent={{
          md: "space-between",
          xs: "center",
        }}
        alignItems={{
          md: "center",
          xs: "center",
        }}
      >
        <Stack direction={"column"} height={"100%"} spacing={2} flex={2} my={2}>
          <Typography variant={"h4"} fontWeight={"bolder"} >
            {page_title_plural[0]?.toUpperCase() + page_title_plural.slice(1)}
          </Typography>
          <LocaleSwitch location={router.asPath} lang={locale} />
        </Stack>
        <Stack
          pr={2}
          pl={2}
          direction={{
            md: "row",
            xs: "column",
          }}
          spacing={2}
        >
          {HasSentence && (
            <Link href={`/admin/${api_url}/sentence`}>
              <Button variant="outlined" color="primary">
                {page_title_plural[0]?.toUpperCase() +
                  page_title_plural.slice(1)}{" "}
                Sentence
              </Button>
            </Link>
          )}
          {canAdd && <Link href={"/admin/" + api_url + "/create"}>
            <Button
              color={"therdary"}
              variant={"contained"}
              startIcon={<AddIcon />}
            >
              Add{" "}
              {page_title_single[0].toUpperCase() + page_title_single.slice(1)}
            </Button>
          </Link>}
        </Stack>
      </Stack>
      <Box bgcolor="background.paper">
        <Stack
          p={2}
          direction={"row"}
          spacing={4}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<SearchIcon position={"start"} />}
            placeholder={"Search"}
            onChange={debouncedResults}
            fullWidth
          />
        </Stack>
        <ServerPaginationTable
          columns={columns}
          data={data}
          isLoading={isLoading}
          rowsState={rowsState}
          rowCount={rowCountState}
          setRowsState={setRowsState}
          rowHeight={rowHeight}
        />
      </Box>
    </Box>
  );
};
export default ListingComponent;
