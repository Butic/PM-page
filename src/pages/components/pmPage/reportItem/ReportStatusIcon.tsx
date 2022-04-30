import React from 'react';
import { ReportStatus } from '../../../../interfaces/reportStatusEnums';
import DoneIcon from '@mui/icons-material/Done';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import UpdateDisabledIcon from '@mui/icons-material/UpdateDisabled';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { red, pink, yellow, green, grey } from '@mui/material/colors';

const ReportStatusIcon = ({ status }: { status: ReportStatus }) => {
  switch (status) {
  case ReportStatus.completed:
    return <DoneIcon sx={{ color: green[500] }}/>;
  case ReportStatus.in_progress:
    return <PendingActionsIcon sx={{ color: yellow[800] }}/>;
  case ReportStatus.question:
    return <QuestionMarkIcon sx={{ color: pink[100] }}/>;
  case ReportStatus.out_of_deadline:
    return <UpdateDisabledIcon sx={{ color: red[500] }}/>;
  case ReportStatus.paused:
    return <PauseCircleOutlineIcon/>;
  default:
    return <ListAltIcon sx={{ color: grey[900] }}/>;
  }
};

export default ReportStatusIcon;
