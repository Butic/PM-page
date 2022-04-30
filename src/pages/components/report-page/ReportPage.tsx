import React, {useState} from 'react';
import {
  TextField,
  Typography,
  FormControl,
  Box,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ImageCoin from '../ImageCoin/ImageCoin';
import { goodJobToast } from '../../../settings/toastSettings';
import cl from './ReportPage.module.css';
import { ToastContainer, toast } from 'react-toastify';

const ReportPage: React.FC = () => {
  const [status, setStatus] = useState('');
  const [value, setValue] = useState<Date | null>(null);

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const handleSubmit = () => {
    setTimeout(() => toast('', goodJobToast), 5000);
  };

  return (
    <div className={cl.wrapper}>
      <Box>
        <FormControl className={cl.form}>
          <Typography className={cl.typography}>Name of project (Study Task)</Typography>
          <TextField variant="standard" fullWidth/>
          <Typography className={cl.typography}>Study Task</Typography>
          <TextField variant="standard"/>
          <Typography className={cl.typography}>Description of Task</Typography>
          <TextField variant="standard"/>
          <Typography className={cl.typography}>Status </Typography>
          <FormControl variant="standard" sx={{ m: 1, }}>
            <InputLabel id="set-status-label">Choose status</InputLabel>
            <Select
              labelId="set-status-label"
              id="set-status-select"
              value={status}
              onChange={handleChange}
              label="Choose status"
            >
              <MenuItem value={1}>In progress</MenuItem>
              <MenuItem value={2}>Review</MenuItem>
              <MenuItem value={3}>Done</MenuItem>
              <MenuItem value={4}>Problem</MenuItem>
            </Select>
          </FormControl>
          <Typography className={cl.typography}>Autor</Typography>
          <TextField variant="standard"/>
          <Typography className={cl.typography}>Date and time of report</Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Choose date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <div onClick={handleSubmit} className={cl.send_report}>
            <ImageCoin/>
          </div>
        </FormControl>
      </Box>
      <ToastContainer />
    </div>
  );
};
export default ReportPage;