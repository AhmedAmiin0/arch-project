import { Box, CircularProgress, Stack } from "@mui/material";
import dynamic from "next/dynamic";
export const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  ),
});

export const Editor = ({value, onChange}) => {
  return (
    <QuillNoSSRWrapper
      modules={{
        toolbar: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: ["small", "normal", "large"] }],
          ["bold", "italic", "underline"],
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        },
      }}
      value={value}
      onChange={onChange}
      formats={["header", "font", "size", "bold", "italic", "underline"]}
    />
  );
};
