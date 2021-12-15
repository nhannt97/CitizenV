import * as React from 'react';
import Paper from '@mui/material/Paper';
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
  { label: 'Ha Noi', code: '01' },
  { label: 'Ho Chi Minh', code: '02' },
];
const districts = [
  { label: 'Cau Giay', code: '01' },
  { label: 'Thanh Xuan', code: '02' },
];
const wards = [
  { label: 'Dich Vong', code: '01' },
  { label: 'Mai Dich', code: '02' },
];

export default function StickyHeadTable() {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const now = moment(new Date()).format('YYYY-MM-DD');
  const [list, setList] = React.useState(provinces); // if logined  user is admin -> add A1 => chose province, ....
  return (
    <Paper sx={{ width: '100%', height: '100%', maxHeight: '100%', overflow: 'auto', display: 'flex', justifyContent: 'center' }}>
      <Box maxWidth="100%" width="500px">
        <Formik
          initialValues={{
            //username: list[0].code, // -> get follow role
            password: '',
            isAllowed: true,
            start: '2021-12-18',
            end: '2022-12-18',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            password: Yup.string().min(6).required('Password is required'),
            username: Yup.string().required('Username is required'),
            isAllowed: Yup.boolean(),
            end: Yup.date().required('End date is required'), // need validate > start
            start: Yup.date().required('Start date is required'), // need validate > start
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
                {/* <InputLabel htmlFor="outlined-adornment-email-login">Code</InputLabel> */}
                <Autocomplete
                  disablePortal
                  id="provinces"
                  options={list}
                  sx={{ width: 300}}
                  renderInput={(params) => <TextField {...params} label="Provinces" />}
                />
                {touched.username && errors.username && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {errors.username}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-email-login">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email-login"
                  type="text"
                  value={values.password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Password"
                  inputProps={{}}
                />
                {touched.password && errors.password && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {errors.password}
                  </FormHelperText>
                )}
              </FormControl>
              <Box style={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox style={{ width: 30 }} />
                Has permission
              </Box>

              <FormControl
                fullWidth
                error={Boolean(touched.password && errors.password)}
                sx={{ ...theme.typography.customInput }}
              >
                <InputLabel htmlFor="outlined-adornment-password-login">Start date</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-login"
                  type='date'
                  value={values.start}
                  name="start"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Start date"
                  inputProps={{}}
                />
                {touched.start && errors.start && (
                  <FormHelperText error id="standard-weight-helper-text-password-login">
                    {errors.start}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl
                fullWidth
                error={Boolean(touched.password && errors.password)}
                sx={{ ...theme.typography.customInput }}
              >
                <InputLabel htmlFor="outlined-adornment-password-login">End date</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-login"
                  type='date'
                  value={values.end}
                  name="end"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="End date"
                  inputProps={{}}
                />
                {touched.end && errors.end && (
                  <FormHelperText error id="standard-weight-helper-text-password-login">
                    {errors.end}
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
                    Add new user
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