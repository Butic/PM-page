import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { smokeSigarettsToast } from '../../../settings/toastSettings';
import RegistrationWindow from './RegistrationWindow';
import classes from './RegistrationWindowContainer.module.css';

const RegistrationWindowContainer = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [paswordsEqual, setPaswordsEqual] = useState(true);

  const searchParams = useSearchParams();
  const username = searchParams[0].get('username');
  const key = searchParams[0].get('key');

  useEffect(() => {
    !paswordsEqual && toast('', smokeSigarettsToast);
  }, [paswordsEqual]);

  const onPasswordChange = (e: React.BaseSyntheticEvent) => {
    !paswordsEqual && setPaswordsEqual(true);
    setPassword(e.target.value);
    !e.target.value && setConfirmPassword('');
  };

  const onConfirmPasswordChange = (e: React.BaseSyntheticEvent) => {
    !paswordsEqual && setPaswordsEqual(true);
    setConfirmPassword(e.target.value);
  };

  const sendRegistrationData = (): void => {
    console.log('Here should be a function sended data on server: ', {
      username,
      password,
      key,
    });
  };

  const onFormSubmit = (e: React.BaseSyntheticEvent): void => {
    e.preventDefault();
    password === confirmPassword ? sendRegistrationData() : setPaswordsEqual(false);
  };

  return (
    <div className={classes.windowContainer}>
      <h1 className={classes.windowGreetings}>Hello {username ? username : 'my friend'},</h1>
      <h1 className={classes.windowGreetings}>
        please comolete registration by creating your password
      </h1>
      <RegistrationWindow
        username={username || 'friend'}
        password={password}
        confirmPassword={confirmPassword}
        paswordsEqual={paswordsEqual}
        onFormSubmit={onFormSubmit}
        onPasswordChange={onPasswordChange}
        onConfirmPasswordChange={onConfirmPasswordChange}
      />
      <ToastContainer />
    </div>
  );
};

export default RegistrationWindowContainer;
