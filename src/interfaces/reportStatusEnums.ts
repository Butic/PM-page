export enum ReportStatus{
    completed = 'Completed',
    in_progress = 'In Progress',
    question = 'Question',
    out_of_deadline = 'Out of Deadline',
    paused = 'Paused',
    new = 'New',
}

export const getReportStatusNumber = (status: ReportStatus) =>{
  switch (status) {
  case ReportStatus.completed:
    return 6;
  case ReportStatus.in_progress:
    return 5;
  case ReportStatus.new:
    return 4;
  case ReportStatus.paused:
    return 3;
  case ReportStatus.question:
    return 2;
  case ReportStatus.out_of_deadline:
    return 1;
  }
};