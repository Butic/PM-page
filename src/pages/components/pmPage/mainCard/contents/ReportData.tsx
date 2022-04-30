import React, { useEffect, useState } from 'react';
import { Grid, Skeleton } from '@mui/material';
import ReportItem from '../../reportItem/ReportItem';
import { useQuery } from '@apollo/client';
import { GET_REPORTS_BY_AUTHOR } from '../../../../../graph-ql/pm-page-gql';
import { reportCardInterface } from '../../../../../interfaces/report-card-interface';

const ReportData = ({name}: {name: string}) => {
  const [authorsReports, setAuthorsReports] = useState<reportCardInterface[]>([]);

  const { loading, error, data } = useQuery(GET_REPORTS_BY_AUTHOR, { variables: {author: name,}, });
  
  useEffect(()=>{
    if(data) setAuthorsReports(data.authorsReports);
  }, [data]);
  
  return (
    <Grid container>
      {loading?<Skeleton/>:
        error?<h6>Server error</h6>:
          authorsReports.length>0?
            authorsReports.map((el : reportCardInterface) => (
              <ReportItem
                key={el._id}
                _id={el._id}
                description={el.taskDescription}
                status={el.status}
                author={el.author}
                date={el.dateOfReport}
                fullScreenMode={false}
              />
            ))
            :
            <h6>Nothing to show...</h6>}
    </Grid>
  );
};

export default ReportData;
