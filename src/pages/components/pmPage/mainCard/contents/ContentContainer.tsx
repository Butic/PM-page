import React from 'react';
import { cardInfo } from '../../../../../interfaces/cardInfoEnum';
import ReportData from './ReportData';
import TaskData from './TaskData';
import UserInfo from './UserInfo';

const ContentContainer = ({stack, projects, containerName, name}:{stack: string[], projects: string[], containerName:cardInfo, name:string}) => {
  if (containerName===cardInfo.TASKS) return <TaskData/>;
  else if(containerName===cardInfo.REPORTS) return <ReportData name={name}/>;
  return <UserInfo stack={stack} projects={projects}/>;
};

export default ContentContainer;
