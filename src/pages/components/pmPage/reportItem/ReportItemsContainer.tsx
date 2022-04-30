import * as React from 'react';
import { Grid, Skeleton } from '@mui/material';
import ReportItem from './ReportItem';
import { getReportStatusNumber } from '../../../../interfaces/reportStatusEnums';
import { reportFilterEnums } from '../../../../interfaces/reportFilterEnums';
import { useQuery } from '@apollo/client';
import { GET_ALL_REPORTS } from '../../../../graph-ql/pm-page-gql';
import { reportCardInterface } from '../../../../interfaces/report-card-interface';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { addAllReportsActionCreator } from '../../../../redux/reducers/pmPageReducer';

const ReportItemsContainer = ({
  targetedFilter,
  toggleDrawer,
  anchor,
  fullScreenMode,
  searchData,
}: {
  targetedFilter: reportFilterEnums;
  toggleDrawer: any;
  anchor: string;
  fullScreenMode: boolean;
  searchData: string;
}) => {
  const dispatch = useDispatch();
  const { data } = useQuery(GET_ALL_REPORTS);
  let filteredReports = [];
  if (data) {
    dispatch(addAllReportsActionCreator(data.reports));
    filteredReports = data.reports.filter(
      (el: reportCardInterface) =>
        el.taskDescription.toLowerCase().includes(searchData.toLowerCase()) ||
        el.author.toLowerCase().includes(searchData.toLowerCase()),
    );
    if (targetedFilter) {
      filteredReports.sort((a: reportCardInterface, b: reportCardInterface) => {
        switch (targetedFilter) {
        case reportFilterEnums.NAME:
          if (a.author > b.author) return 1;
          return -1;

        case reportFilterEnums.STATUS:
          if (getReportStatusNumber(a.status) > getReportStatusNumber(b.status)) return 1;
          return -1;
        case reportFilterEnums.DATE:
          if (a.dateOfReport > b.dateOfReport) return -1;
          return 1;
        default:
          return 0;
        }
      });
    }
  }

  return (
    <Grid
      sx={{
        width: !fullScreenMode ? '20vw' : '60vw',
        transition: '1s',
      }}
      container
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {filteredReports.length > 0 ? (
        filteredReports.map((el: reportCardInterface) => (
          <ReportItem
            key={el._id}
            _id={el._id}
            status={el.status}
            description={el.taskDescription}
            author={el.author}
            date={el.dateOfReport}
            fullScreenMode={fullScreenMode}
          />
        ))
      ) : (
        <Box sx={{ width: '95%' }}>
          <Skeleton key={Math.random()} sx={{ marginLeft: '10%', height: '10vh' }} />
          <Skeleton key={Math.random()} sx={{ marginLeft: '10%', height: '10vh' }} />
          <Skeleton key={Math.random()} sx={{ marginLeft: '10%', height: '10vh' }} />
          <Skeleton key={Math.random()} sx={{ marginLeft: '10%', height: '10vh' }} />
        </Box>
      )}
    </Grid>
  );
};

export default ReportItemsContainer;
