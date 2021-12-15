import * as React from 'react';
import Paper from '@mui/material/Paper';
import { IconButton, Box, Checkbox } from '@mui/material';
import { Create as CreateIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'username', headerName: 'Username', width: 100 },
  { field: 'password', headerName: 'Password', minWidth: 100 },
  {
    field: 'role',
    headerName: 'Role',
    width: 80,
  },
  {
    field: 'start',
    headerName: 'Permission Start Time',
    width: 180,
  },
  {
    field: 'end',
    headerName: 'Permission End Time',
    width: 180,
  },
  {
    field: 'isAllowed',
    headerName: 'Has Permission',
    width: 150,
    renderCell: (value) => <Checkbox disabled checked={value} color="primary" />
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 170,
    align: 'right',
    renderCell: () => {
      return (
        <>
          <IconButton size="small">
            <CreateIcon />
          </IconButton>
          <IconButton size="small">
            <DeleteIcon />
          </IconButton>
        </>
      );
    }
  },
];

function createData(
  id,
  username,
  password,
  role,
  start,
  end,
  isAllowed
) {
  return {
    id,
    username,
    password,
    role,
    start,
    end,
    isAllowed
  };
}

const rows = [1, 2, 3, 4, 5].map((d) => createData(d, '0101', 'password', 'A2', '2021-12-18', '2022-05-18', true));

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', maxHeight: '100%', overflow: 'auto' }}>
      <div style={{ height: 'calc(100vh - 200px)', width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15, 30, 50]}
        />
      </div>
    </Paper>
  );
}