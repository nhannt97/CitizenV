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

const provinces = [
  { label: 'Ha Noi' },
  { label: 'Ho Chi Minh' },
];
const districts = [
  { label: 'Cau Giay' },
  { label: 'Thanh Xuan' },
];
const wards = [
  { label: 'Dich Vong' },
  { label: 'Mai Dich' },
];


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'birthday', label: 'Birthday', minWidth: 150 },
  {
    id: 'address',
    label: 'Address',
    minWidth: 170,
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
    align: 'right',
    format: () => {
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
  name,
  birthday,
  address,
) {
  return { name, birthday, address };
}

const rows = [
  createData('Nguyen Van A', '1997-05-18', 'Dich Vong, Cau Giay, Ha Noi'),
  createData('Nguyen Van A', '1997-05-18', 'Dich Vong, Cau Giay, Ha Noi'),
  createData('Nguyen Van A', '1997-05-18', 'Dich Vong, Cau Giay, Ha Noi'),
  createData('Nguyen Van A', '1997-05-18', 'Dich Vong, Cau Giay, Ha Noi'),
  createData('Nguyen Van A', '1997-05-18', 'Dich Vong, Cau Giay, Ha Noi'),
  createData('Nguyen Van A', '1997-05-18', 'Dich Vong, Cau Giay, Ha Noi'),
  createData('Nguyen Van A', '1997-05-18', 'Dich Vong, Cau Giay, Ha Noi'),
  createData('Nguyen Van A', '1997-05-18', 'Dich Vong, Cau Giay, Ha Noi'),
  createData('Nguyen Van A', '1997-05-18', 'Dich Vong, Cau Giay, Ha Noi'),
  createData('Nguyen Van A', '1997-05-18', 'Dich Vong, Cau Giay, Ha Noi'),
  createData('Nguyen Van A', '1997-05-18', 'Dich Vong, Cau Giay, Ha Noi'),
  createData('Nguyen Van A', '1997-05-18', 'Dich Vong, Cau Giay, Ha Noi'),
  createData('Nguyen Van A', '1997-05-18', 'Dich Vong, Cau Giay, Ha Noi'),
  createData('Nguyen Van A', '1997-05-18', 'Dich Vong, Cau Giay, Ha Noi'),
  createData('Nguyen Van A', '1997-05-18', 'Dich Vong, Cau Giay, Ha Noi'),
];

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
          disablePortal
          id="provinces"
          options={provinces}
          sx={{ width: 300, margin: 1 }}
          renderInput={(params) => <TextField {...params} label="Provinces" />}
        />
        <Autocomplete
          size="small"
          disablePortal
          id="districts"
          options={districts}
          sx={{ width: 300, margin: 1 }}
          renderInput={(params) => <TextField {...params} label="Districts" />}
        />
        <Autocomplete
          size="small"
          disablePortal
          id="wards"
          options={wards}
          sx={{ width: 300, margin: 1 }}
          renderInput={(params) => <TextField {...params} label="Wards" />}
        />
      </Box>
      <TableContainer sx={{ maxHeight: 'calc(100%)' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}