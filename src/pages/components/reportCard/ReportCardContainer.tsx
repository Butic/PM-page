import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_ONE_REPORT } from '../../../graph-ql/pm-page-gql';
import ReportCard from './ReportCard';
import { Skeleton } from '@mui/material';

const ReportCardContainer = ({ id }: { id: string }) => {
  const [loadGreeting, { data }] = useLazyQuery(GET_ONE_REPORT);
  useEffect(()=>{
    id&&loadGreeting({variables:{id}});
  },[id]);

  return (
    <>
      {data?
        <ReportCard
          _id={data.report._id}
          projectName={data.report.projectName}
          taskName={data.report.taskName}
          taskDescription={data.report.taskDescription}
          status={data.report.status}
          author={data.report.author}
          dateOfReport={data.report.dateOfReport}
          sideInfo={data.report.sideInfo}
        />
        :
        <Skeleton sx={{ position: 'fixed', minHeight: '98vh', minWidth: '34vw', top: '1vh', left: '2vw'}}/>
      }
    </>
  );
};

export default ReportCardContainer;
