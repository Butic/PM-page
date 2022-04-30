import React from 'react';
import { Grid } from '@mui/material';
import ReportItem from '../../reportItem/ReportItem';
import { ReportStatus } from '../../../../../interfaces/reportStatusEnums';

const TaskData = () => {
  const tempReports = [
    {
      description: 'bngf Ubfbser Proftrfile',
      status: ReportStatus.completed,
      author: 'John San',
      date: new Date(),
    },
    {
      description: 'Creadfaate Report List',
      status: ReportStatus.in_progress,
      author: 'Roy Yl',
      date: new Date(),
    },
    {
      description: 'as uthorisdhdation',
      status: ReportStatus.completed,
      author: 'Aol Jan',
      date: new Date(),
    },
    {
      description: 'Add Swdgfhdagger',
      status: ReportStatus.question,
      author: 'Pherlock Sl',
      date: new Date(),
    },
    {
      description: 'zsdfc PM contgkhrdol page',
      status: ReportStatus.in_progress,
      author: 'Pherlock Sl',
      date: new Date(),
    },
  ];
  return (
    <Grid container>
      {tempReports.map((el) => (
        <ReportItem
          _id={el.description}
          key={1}
          date={el.date}
          status={el.status}
          description={el.description}
          author={el.author}
          fullScreenMode={false}
        />
      ))}
    </Grid>
  );
};

export default TaskData;