import React from 'react';
import { ReportStatus } from './reportStatusEnums';
import { Role } from './roleEnum';

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export type Left_Right_Bars = {
  anchor: Anchor;
  toggleDrawer(anchor: Anchor, open: boolean): unknown;
  state: any;
  list(anchor: Anchor): React.ReactElement;
};

export type minorUsersData = {
  _id: string,
  name: string,
  stack: string[],
};

export type singleUserData = {
  _id: string,
  name: string,
  email: string,
  projects: string[],
  sideInfo: string,
  role: Role,
  stack: string[],
}

export type pmPageRightSideReports = {
  description: string,
  status: ReportStatus,
  author: string,
  date: Date,
}

export type pmPageReducerStateType = {
  visitedUsersData: singleUserData[],
  reports: pmPageRightSideReports[],
  targetedUser: singleUserData, 
  targetedReportId: string,
};
