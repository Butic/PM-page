import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Anchor } from '../../../interfaces/Pm-Page-types';
import classes from './PmPage.module.css';
import { Button, SwipeableDrawer, Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import UserCardContainer from './usersLeftBar/UserCardContainer';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useQuery } from '@apollo/client';
import { GET_MINOR_USERS } from '../../../graph-ql/pm-page-gql';
import CardSkeleton from './CardSkeleton';

const LeftBar = () => {
  const { data } = useQuery(GET_MINOR_USERS);

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
        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor): React.ReactElement => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {!data ? (
        <CardSkeleton repeat={10}/>
      ) : (
        <UserCardContainer users={data.findAllUsers} />
      )}
      <Divider />
    </Box>
  );

  return (
    <React.Fragment key={'left'}>
      <Tooltip TransitionComponent={Zoom} title="List of developers" followCursor>
        <Button
          className={classes.right_left_buttons}
          variant="contained"
          onClick={toggleDrawer('left', true)}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Tooltip>
      <SwipeableDrawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {list('left')}
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default LeftBar;
