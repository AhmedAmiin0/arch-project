import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import axios from "../../../config/axios";
import {useQuery} from "../../../hooks/useQuery";

export default function ServerPaginationGrid({
                                               columns,
                                               isLoading,
                                               data,
                                               rowCount,
                                               handleRowChange,
                                               page,
                                               pageSize
                                             }) {
  // const [rowsState, setRowsState] = React.useState({
  //   page: 0,
  //   pageSize: 1,
  // });


  return (
    <div style={{height: 700, width: '100%'}}>
      <DataGrid
        columns={columns}
        rows={data}
        rowCount={rowCount}
        loading={isLoading}
        page={page}
        pageSize={pageSize}
        rowsPerPageOptions={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        paginationMode="server"
        onPageChange={handleRowChange}
        onPageSizeChange={handleRowChange}
        rowHeight={100}
        sx={{
          height: 700,
          '.MuiDataGrid-virtualScroller': {
            overflow: 'auto !important',
            '&::-webkit-scrollbar': {
              width: '0em',
            }
          }
        }}
      />
    </div>
  );
}
