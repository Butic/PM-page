import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { profileCardInterface } from '../../../interfaces/profile-card-interface';
import { getMyDataActionCreator } from '../../../redux/reducers/myData';
import { smokeSigarettsToast } from '../../../settings/toastSettings';
import LoginWindow from './LoginWindow';

const LoginWindowContainer = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isDataIncorrect, setIsDataIncorrect] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    isDataIncorrect && toast('', smokeSigarettsToast);
  }, [isDataIncorrect]);

  const onPasswordChange = (e: React.BaseSyntheticEvent) => {
    isDataIncorrect && setIsDataIncorrect(false);
    setPassword(e.target.value);
    !e.target.value && setLogin('');
  };

  const onloginChange = (e: React.BaseSyntheticEvent) => {
    isDataIncorrect && setIsDataIncorrect(false);
    setLogin(e.target.value);
  };
  const data = { username: login, password };

  const onFormSubmit = async (e: React.BaseSyntheticEvent): Promise<void> => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3007/login', data, {
        withCredentials: true,
      });
      dispatch(getMyDataActionCreator(response.data.myData as profileCardInterface));
    } catch (error) {
      setIsDataIncorrect(true);
      console.error(error);
    }
  };

  return (
    <>
      <LoginWindow
        login={login}
        password={password}
        onFormSubmit={onFormSubmit}
        onPasswordChange={onPasswordChange}
        onLoginChange={onloginChange}
        isDataIncorrect={isDataIncorrect}
      />
      <ToastContainer />
    </>
  );
};

export default LoginWindowContainer;
