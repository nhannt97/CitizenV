import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { IconButton, Box, FormControl, InputLabel, OutlinedInput, FormHelperText, Button, MenuItem } from '@mui/material';
import { Create as CreateIcon, Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useTheme } from '@mui/material/styles';
import EditDialog from './EditDialog';
import { DataGrid } from '@mui/x-data-grid';

const codes = [];
for (let i = 1; i <= 63; i++) {
  codes.push({
    value: i < 10 ? '0' + i : i.toString()
  });
}

function createData(
  id,
  name,
  code,
) {
  return { id, name, code };
}

const rows = [
  createData(1, 'Ha Noi', '01'),
  createData(2, 'Ho Chi Minh', '02'),
];

export default function StickyHeadTable() {
  const theme = useTheme();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [editPro, setEditPro] = React.useState();
  const columns = [
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'code', headerName: 'Code', width: 100 },
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      align: 'right',
      renderCell: (pr) => {
        return (
          <>
            <IconButton size="small" onClick={() => { setEditPro(rows.find(row => row.code === pr.row.code)); setOpen(true); }} >
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
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', maxHeight: '100%', overflow: 'auto' }}>
      {open && <EditDialog province={editPro} open={open} onClose={() => { setOpen(false); setEditPro(); }} />}
      <Box display='flex' mt={1} mb={1}>
        <AnimateButton>
          <Button
            disableElevation
            size="large"
            type="submit"
            variant="contained"
            color="secondary"
            onClick={() => { setEditPro();setOpen(true);}}
          >
            <AddIcon /> Add new province
          </Button>
        </AnimateButton>
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