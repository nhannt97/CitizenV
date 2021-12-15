import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { IconButton, Box, FormControl, Dialog, DialogTitle, FormHelperText, Button, MenuItem } from '@mui/material';
import { Create as CreateIcon, Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useTheme } from '@mui/material/styles';


const codes = [];
for (let i = 1; i <= 63; i++) {
  codes.push({
    value: i < 10 ? '0' + i : i.toString()
  });
}


export default function StickyHeadTable({ province, onClose }) {
  const theme = useTheme();

  return (
    <Dialog onClose={onClose} open={true}>
      <DialogTitle>{province ? 'Edit province' : 'Add new province'}</DialogTitle>
      <Formik
        initialValues={{
          name: province?.name || '',
          code: province?.code || codes[0].value,
          submit: null
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(255).required('Name is required'),
          code: Yup.string().max(2).min(2).required('Code is required'),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} style={{ display: 'flex', width: '100%', padding: 20 }}>
            <FormControl style={{ width: 250, maxWidth: 'calc(100% - 160px)' }} error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <TextField
                id="outlined-adornment-email-login"
                type="text"
                value={values.name}
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Name"
                inputProps={{}}
              />
              {touched.name && errors.name && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.name}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl style={{ width: 100, margin: '8px 10px' }} error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <TextField
                id="outlined-adornment-email-login"
                select
                value={values.code}
                name="code"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Code"
              >
                {codes.map((code) => (
                  <MenuItem key={code.value} value={code.value}>
                    {code.value}
                  </MenuItem>
                ))}
              </TextField>
              {touched.code && errors.code && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.code}
                </FormHelperText>
              )}
            </FormControl>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  {!province ? <AddIcon /> : 'Edit'}
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </Dialog>
  );
}