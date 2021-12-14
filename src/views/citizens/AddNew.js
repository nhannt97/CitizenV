import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import moment from 'moment';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import { Create as CreateIcon, Delete as DeleteIcon } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useTheme } from '@mui/material/styles';

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

export default function StickyHeadTable() {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const now = moment(new Date()).format('YYYY-MM-DD');
  return (
    <Paper sx={{ width: '100%', height: '100%', maxHeight: '100%', overflow: 'auto', display: 'flex', justifyContent: 'center' }}>
      <Box maxWidth="100%" width="500px">
        <Formik
          initialValues={{
            name: '',
            birthday: now,
            province: '',
            district: '',
            ward: '',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().max(255).required('Name is required'),
            birthDay: Yup.string().max(now).required('Birthday is required'),
            province: Yup.string().required('Province is required'),
            district: Yup.string().required('District is required'),
            ward: Yup.string().required('Ward is required'),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              if (scriptedRef.current) {
                setStatus({ success: true });
                setSubmitting(false);
              }
            } catch (err) {
              console.error(err);
              if (scriptedRef.current) {
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
            }
          }}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Box m={2}>
                <Typography variant="h2">Add new citizen</Typography>
              </Box>
              <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-email-login">Name</InputLabel>
                <OutlinedInput
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

              <FormControl
                fullWidth
                error={Boolean(touched.password && errors.password)}
                sx={{ ...theme.typography.customInput }}
              >
                <InputLabel htmlFor="outlined-adornment-password-login">Birthday</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-login"
                  type='date'
                  value={values.birthday}
                  name="birthday"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Birthday"
                  inputProps={{}}
                />
                {touched.birthday && errors.birthday && (
                  <FormHelperText error id="standard-weight-helper-text-password-login">
                    {errors.birthday}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                error={Boolean(touched.password && errors.password)}
                sx={{ ...theme.typography.customInput }}
              >
                <Autocomplete
                  disablePortal
                  id="provinces"
                  options={provinces}
                  renderInput={(params) => <TextField {...params} label="Provinces" />}
                />
              </FormControl>
              <FormControl
                fullWidth
                error={Boolean(touched.password && errors.password)}
                sx={{ ...theme.typography.customInput }}
              >
                <Autocomplete
                  disablePortal
                  id="districts"
                  options={districts}
                  renderInput={(params) => <TextField {...params} label="Districts" />}
                />
              </FormControl>
              <FormControl
                fullWidth
                error={Boolean(touched.password && errors.password)}
                sx={{ ...theme.typography.customInput }}
              >
                <Autocomplete
                  disablePortal
                  id="wards"
                  options={wards}
                  renderInput={(params) => <TextField {...params} label="Wards" />}
                />
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
                    Sign in
                  </Button>
                </AnimateButton>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Paper>
  );
}