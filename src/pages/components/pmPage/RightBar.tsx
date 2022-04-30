import * as React from 'react';
import { Anchor } from '../../../interfaces/Pm-Page-types';
import classes from './PmPage.module.css';
import { Button, SwipeableDrawer, Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RightBarReportsContainer from './rightBarReports/RightBarReportsContainer';

const RightBar = () => {
  const [fullScreenMode, setFullScreenMode] = React.useState(false);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent): void => {
        if (
          event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
        )
          return;
        fullScreenMode&&setFullScreenMode(false);
        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor): React.ReactElement => (
    <RightBarReportsContainer toggleDrawer={toggleDrawer} anchor={anchor} fullScreenMode={fullScreenMode} />
  );

  return (
    <React.Fragment key={'right'}>
      <Tooltip TransitionComponent={Zoom} title="Last reports" followCursor>
        <Button
          className={classes.right_left_buttons}
          variant="contained"
          onClick={toggleDrawer('right', true)}
        >
          <ArrowBackIosIcon />
        </Button>
      </Tooltip>
      <SwipeableDrawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {list('right')}
        <button
          className={classes.rigth_side_full_screen}
          onClick={() => {
            setFullScreenMode(!fullScreenMode);
          }}
        >
          {!fullScreenMode ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
        </button>
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default RightBar;
