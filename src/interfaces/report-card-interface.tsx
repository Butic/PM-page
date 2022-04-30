import { ReportStatus } from './reportStatusEnums';

export interface reportCardInterface {
  _id: string;
  projectName: string;
  taskName: string;
  taskDescription: string;
  status: ReportStatus;
  author: string;
  dateOfReport: Date;
  sideInfo: string;
}
