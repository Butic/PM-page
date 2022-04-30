import React from 'react';
import { FormControl } from '@mui/material';
import { Login } from '../../../interfaces/login-interface';
import classes from './LoginWindow.module.css';
import ImageCoin from '../ImageCoin/ImageCoin';

const LoginWindow = ({
  login,
  password,
  onFormSubmit,
  onPasswordChange,
  onLoginChange,
  isDataIncorrect,
}: Login) => {
  return (
    <FormControl
      className={classes.form_control_container}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmitCapture={onFormSubmit}
    >
      <div className="d-flex align-items-center">
        <ImageCoin />
        <input
          className={classes.input__login}
          type="text"
          id="filled-disabled"
          placeholder="Login ..."
          defaultValue={login}
          onChange={onLoginChange}
          required={true}
        />
      </div>
      <div className="d-flex align-items-center">
        <ImageCoin />
        <input
          className={classes.input__login}
          id="filled-password-input"
          placeholder="Password ..."
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={onPasswordChange}
          required={true}
        />
      </div>
      <div className={classes.input__button_container}>
        <ImageCoin />
        <button className={classes.input__button}>Submit </button>
        <ImageCoin />
      </div>
      {isDataIncorrect && <span className={classes.err}>Email or password - incorrect</span>}
    </FormControl>
  );
};

export default LoginWindow;
