import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import RegistrationWindowContainer from './pages/components/registration/RegistrationWindowContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import LoginWindowContainer from './pages/components/login/LoginWindowContainer';
import Account from './pages/components/account/Account';
import WSfront from './pages/components/working-space-front/WSfront';
import ReportPage from './pages/components/report-page/ReportPage';
import PmPageContainer from './pages/components/pmPage/PmPageContainer';

function App() {
  return (
    <Routes>
      <Route path='/registration' element={<RegistrationWindowContainer/>}/>
      <Route path='/' element={<LoginWindowContainer/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/work-space' element={<WSfront/>}/>
      <Route path='/report' element={<ReportPage/>}/>
      <Route path='/pm-page' element={<PmPageContainer/>}/>
    </Routes>
  );
}

export default App;
