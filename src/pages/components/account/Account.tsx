/* eslint-disable no-useless-escape */
import React from 'react';
import { useState } from 'react';
import {
  Button,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
  FormControl,
  Box,
} from '@mui/material';
import cl from './Account.module.css';

const Account: React.FC = () => {

  const [role, setRole] = useState('');
  const [input, setInput] = useState('');

  const isValidEmail = (input: string):boolean => {
    const regexp = /^(([^\<\>\(\)\[\]\\.,;:\s@"]+(\.[^\<\>\(\)\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(input);
  };

  const handleChange = (e: SelectChangeEvent) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert('You\'re on the right road, comrades!');
  };

  return (
    <div className={cl.account_wrapper}>

      <FormControl
        className={cl.form}
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >

        <TextField
          placeholder="Your name"
          label="Name"
          variant="outlined"
          required
        />

        <TextField
          type="email"
          placeholder="Your email"
          label="Email"
          variant="outlined"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          error={!isValidEmail(input)}
          helperText={isValidEmail(input) ? '' : 'Incorrect email'}
          required
        />

        <Box sx={{ minWidth: 120 }}>

          <FormControl fullWidth>

            <InputLabel id="human-role-label">Role</InputLabel>
            
            <Select
              labelId="human-role-label"
              id="human-role-select"
              value={role}
              label="Role"
              onChange={handleChange}
            >
              <MenuItem value={1}>Project manger</MenuItem>

              <MenuItem value={2}>Developer</MenuItem>

              <MenuItem value={3}>HR</MenuItem>
            </Select>

          </FormControl>
        
        </Box>
        
        <Button
          variant="contained"
          type="submit"
        >
          Create account
        </Button>

      </FormControl>

    </div>
  );
};
export default Account;
