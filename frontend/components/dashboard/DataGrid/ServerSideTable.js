import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/material";

/**
 * TODO: Improve `useDemoData` to move the fake pagination inside it instead of "fetching" everything of slicing in the component
 */
export default function ServerPaginationTable({
  columns,
  data,
  isLoading,
  rowsState,
  rowCount,
  setRowsState
}) {
  const [rowCountState, setRowCountState] = React.useState(rowCount || 0);
  React.useEffect(() => setRowCountState((prevRowCountState) => rowCount !== undefined ? rowCount : prevRowCountState), [rowCount, setRowCountState]);

  return (
    <Box bgcolor='background.paper'
    >
      <DataGrid
        columns={columns}
        rows={data}
        rowCount={rowCountState}
        loading={isLoading}
        pagination
        {...rowsState}
        paginationMode="server"
        rowsPerPageOptions={[5, 10, 20, 50, 100]}
        onPageChange={(page) => setRowsState((prev) => ({ ...prev, page }))}
        onPageSizeChange={(pageSize) => setRowsState((prev) => ({ ...prev, pageSize }))}
        rowHeight={100}
        sx={{ height: 700, '.MuiDataGrid-virtualScroller': { overflow: 'auto !important', '&::-webkit-scrollbar': { width: '0em', } } }}
      />
    </Box>
  );
}
