import React from 'react';
import { Grid, ListItem, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import { ReportStatus } from '../../../../interfaces/reportStatusEnums';
import Zoom from '@mui/material/Zoom';
import ReportStatusIcon from './ReportStatusIcon';
import { useDispatch } from 'react-redux';
import { addTargetedReportIdActionCreator } from '../../../../redux/reducers/pmPageReducer';
import { toNormalDate } from '../../../../functions/toNormalDate';

const ReportItem = ({
  _id,
  description,
  status,
  author,
  date,
  fullScreenMode,
}: {
  _id: string;
  description: string;
  status: ReportStatus;
  author: string;
  date: Date;
  fullScreenMode: boolean;
}) => {
  const dispatch = useDispatch();
  return (
    <Grid
      item
      sx={{
        width: '100%',
        borderBottom: '1px solid lightgray',
        borderRight: '1px solid lightgray',
      }}
      xs={!fullScreenMode ? 12 : 4}
    >
      <Tooltip TransitionComponent={Zoom} title={status}>
        <ListItem
          button
          onClick={()=>{dispatch(addTargetedReportIdActionCreator(_id));}}
        >
          <ListItemIcon>
            <ReportStatusIcon status={status} />
          </ListItemIcon>
          <ListItemText
            primary={description}
            secondary={author + ' - ' + toNormalDate(date.toLocaleString())}
          />
        </ListItem>
      </Tooltip>
    </Grid>
  );
};

export default ReportItem;
