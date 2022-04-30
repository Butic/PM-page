import { actionCreatorInterface } from '../../interfaces/actionCreatorInterface';
import { pmPage } from './enums-reducer';
import { pmPageReducerStateType, singleUserData } from '../../interfaces/Pm-Page-types';
import { Role } from '../../interfaces/roleEnum';
import { reportCardInterface } from '../../interfaces/report-card-interface';
import { ReportStatus } from '../../interfaces/reportStatusEnums';

export const nullableUser: singleUserData = {
  _id: '',
  name: '',
  email: '',
  projects: [],
  sideInfo: '',
  role: Role.NO_ROLE,
  stack: [],
};

export const nullableReport: reportCardInterface = {
  _id: '',
  projectName: '',
  taskName: '',
  taskDescription: '',
  status: ReportStatus.new,
  author: '',
  dateOfReport: new Date(),
  sideInfo: '',
};

const InitialState: pmPageReducerStateType = {
  visitedUsersData: [],
  reports: [],
  targetedUser: { ...nullableUser },
  targetedReportId: '',
};

export const pmPageReducer = (
  state: pmPageReducerStateType = InitialState,
  action: actionCreatorInterface,
) => {
  switch (action.type) {
  case pmPage.GET_SINGLE_USER_DATA:
    return { ...state, targetedUser: action.payload };
  case pmPage.ADD_VISITED_USERS_DATA:
    return { ...state, visitedUsersData: [...state.visitedUsersData, action.payload] };
  case pmPage.ADD_TARGETED_REPORT_ID:
    return { ...state, targetedReportId: action.payload };
  case pmPage.DELETE_TARGETED_REPORT_ID:
    return { ...state, targetedReportId: '' };
  case pmPage.ADD_ALL_REPORS:
    return { ...state, reports: action.payload };

  default:
    return state;
  }
};

export const getSingleUserDataActionCreator = (user: singleUserData) => ({
  type: pmPage.GET_SINGLE_USER_DATA,
  payload: user,
});

export const addVisitedUsersDataActionCreator = (user: singleUserData) => ({
  type: pmPage.ADD_VISITED_USERS_DATA,
  payload: user,
});

export const addTargetedReportIdActionCreator = (_id: string) => ({
  type: pmPage.ADD_TARGETED_REPORT_ID,
  payload: _id,
});

export const deleteTargetedReportIdActionCreator = () => ({
  type: pmPage.DELETE_TARGETED_REPORT_ID,
});

export const addAllReportsActionCreator = (reports: reportCardInterface[]) => ({
  type: pmPage.ADD_ALL_REPORS, payload: reports
});
