import React from 'react';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import classes from './RegistrationWindowContainer.module.css';
import { Registration } from '../../../interfaces/registration-interface';

const RegistrationWindow = ({
  username,
  password,
  confirmPassword,
  paswordsEqual,
  onFormSubmit,
  onPasswordChange,
  onConfirmPasswordChange,
}: Registration) => {
  return (
    <FormControl
      className="position-absolute top-50 start-50 translate-middle"
      component="form"
      onSubmit={onFormSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmitCapture={onFormSubmit}
    >
      <div className="d-flex flex-column">
        <TextField
          disabled
          id="filled-disabled"
          label="Name"
          defaultValue={username}
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password (min 5 symbols)"
          error={!paswordsEqual || (!!password && password.length < 5)}
          type="password"
          autoComplete="current-password"
          variant="filled"
          value={password}
          onChange={onPasswordChange}
          required={true}
        />
        <TextField
          id="filled-confirm-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          disabled={password ? false : true}
          error={!paswordsEqual || (!!confirmPassword && confirmPassword.length < 5)}
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          required={true}
        />
        {!paswordsEqual && <span className={classes.err}>Passwods shold be the same</span>}
        <button className="btn btn-primary">Submit</button>
      </div>
    </FormControl>
  );
};

export default RegistrationWindow;
