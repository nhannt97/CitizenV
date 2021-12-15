import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { IconButton, Box } from '@mui/material';
import { Create as CreateIcon, Delete as DeleteIcon } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { DataGrid } from '@mui/x-data-grid';

const provinces = [
  { label: 'All'},
  { label: 'Ha Noi' },
  { label: 'Ho Chi Minh' },
];
const districts = [
  { label: 'All'},
  { label: 'Cau Giay' },
  { label: 'Thanh Xuan' },
];
const wards = [
  { label: 'All'},
  { label: 'Dich Vong' },
  { label: 'Mai Dich' },
];


const columns = [
  {
    field: 'action',
    headerName: 'Action',
    width: 100,
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
  { field: 'name', headerName: 'Name', width: 170 },
  { field: 'idNumber', headerName: 'ID Number', width: 170 },
  { field: 'birthday', headerName: 'Birthday', width: 150 },
  {
    field: 'address',
    headerName: 'Address',
    width: 170,
  },
  {
    field: 'education',
    headerName: 'Education Level',
    width: 150,
  },
  {
    field: 'career',
    headerName: 'Career',
    width: 150,
  },
  {
    field: 'religion',
    label: 'Religion',
    width: 150,
  },
  
];

function createData(
  id,
  idNumber,
  name,
  birthday,
  address,
  education,
  career,
  religion
) {
  return { id, idNumber, name, birthday, address, education, career, religion };
}

const rows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((e) => 
createData(e, '03876215334', 'Nguyen Van A', '1997-05-18', 'Dich Vong, Cau Giay, Ha Noi', 'Dai hoc', 'Sinh vien', ''),
);
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
      <Box display='flex' mt={1}>
        <Autocomplete
          size="small"
          multiple={true}
          disablePortal
          id="provinces"
          options={provinces}
          sx={{ width: 300, margin: 1 }}
          renderInput={(params) => <TextField {...params} label="Provinces" />}
        />
        <Autocomplete
          size="small"
          multiple={true}
          disablePortal
          id="districts"
          options={districts}
          sx={{ width: 300, margin: 1 }}
          renderInput={(params) => <TextField {...params} label="Districts" />}
        />
        <Autocomplete
          size="small"
          multiple={true}
          disablePortal
          id="wards"
          options={wards}
          sx={{ width: 300, margin: 1 }}
          renderInput={(params) => <TextField {...params} label="Wards" />}
        />
      </Box>
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