import * as React from 'react';
import RightBar from './RightBar';
import LeftBar from './LeftBar';
import classes from './PmPage.module.css';
import MainCardContainer from './mainCard/MainCardContainer';
import { connect } from 'react-redux';
import { singleUserData } from '../../../interfaces/Pm-Page-types';
import ReportCardContainer from '../reportCard/ReportCardContainer';

const PmPageContainer = ({ targetedUser, targetedReportId }: { targetedUser: singleUserData, targetedReportId: string }) => {
  return (
    <div className={classes.Pm_page__container}>
      <LeftBar />
      {targetedUser._id && (
        <div className={classes.main_card_container}>
          <MainCardContainer targetedUser={targetedUser} />
        </div>
      )}
      {targetedReportId && <ReportCardContainer id={targetedReportId} />}
      <RightBar />
    </div>
  );
};

const mapStateToProps = (state: { pmPage: { targetedUser: singleUserData, targetedReportId: string } }) => {
  return {
    targetedUser: state.pmPage.targetedUser,
    targetedReportId: state.pmPage.targetedReportId,
  };
};

export default connect(mapStateToProps)(PmPageContainer);
