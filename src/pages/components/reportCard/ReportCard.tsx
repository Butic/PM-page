import React, { useEffect, useState } from 'react';
import { reportCardInterface } from '../../../interfaces/report-card-interface';
import classes from './ReportCard.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteTargetedReportIdActionCreator } from '../../../redux/reducers/pmPageReducer';
import { toNormalDate } from '../../../functions/toNormalDate';

const ReportCard = ({
  projectName,
  taskName,
  taskDescription,
  status,
  author,
  dateOfReport,
  sideInfo,
}: reportCardInterface) => {
  const [isFrontSide, setIsFrontSide] = useState(true);
  const [flipText, setFlipText] = useState(false);
  const [frameStyle, setFrameStyle] = useState(classes.front_img + ' ' + classes.reportCard__frame);
  const dispatch = useDispatch();

  useEffect(() => {
    setFrameStyle(frameStyle + ' ' + classes.rotate);
    setTimeout(() => {
      isFrontSide
        ? setFrameStyle(classes.front_img + ' ' + classes.reportCard__frame)
        : setFrameStyle(classes.reportCard__frame + ' ' + classes.back_img);
      setFlipText(!flipText);
    }, 500);
  }, [isFrontSide]);

  const flipSide = () => {
    setIsFrontSide(!isFrontSide);
    setTimeout(()=>{dispatch(deleteTargetedReportIdActionCreator());},500);
  };

  return (
    <div className={frameStyle}>
      <Button sx={{ position: 'absolute', top: 15, right: 15, height: '6vh', width: '6vh', borderRadius: '50%' }} onClick={flipSide} variant="text">
        <CloseIcon sx={{fontSize: 38}} />
      </Button>
      <h2 className={classes.reportCard__description}>Name Of Project: {projectName}</h2>
      <h3 className={classes.reportCard__description}>Name Of Task: {taskName}</h3>
      <h4 className={classes.reportCard__description}>Task Description: {taskDescription}</h4>
      <h4 className={classes.reportCard__description}>Status: {status}</h4>
      <h4 className={classes.reportCard__description}>Author: {author}</h4>
      <h4 className={classes.reportCard__description}>Date and time of report: {toNormalDate(dateOfReport.toLocaleString())}</h4>
      <h4 className={classes.reportCard__description}>Side Info: {sideInfo}</h4>
    </div>
  );
};

export default ReportCard;
