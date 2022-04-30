import React from 'react';
import { reportFilterEnums } from '../../../../interfaces/reportFilterEnums';
import TaskItemsContainer from '../reportItem/ReportItemsContainer';
import RightBarSearchField from './RightBarSearchField';

const RightBarReportsContainer = ({
  toggleDrawer,
  anchor,
  fullScreenMode,
}: {
  toggleDrawer: unknown;
  anchor: string;
  fullScreenMode: boolean;
}) => {

  const [searchData, setSearchData] = React.useState('');
  const [targetedFilter, setTargetedFilter] = React.useState(reportFilterEnums.EMPTY);

  return (
    <>
      <RightBarSearchField targetedFilter={targetedFilter} setTargetedFilter={setTargetedFilter} searchData={searchData} setSearchData={setSearchData}/>
      <TaskItemsContainer
        targetedFilter={targetedFilter}
        toggleDrawer={toggleDrawer}
        anchor={anchor}
        fullScreenMode={fullScreenMode}
        searchData={searchData}
      />
    </>
  );
};

export default RightBarReportsContainer;
