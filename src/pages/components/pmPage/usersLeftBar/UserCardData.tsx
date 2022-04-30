import React, { useEffect } from 'react';
import { ListItem, ListItemText, Tooltip } from '@mui/material';
import AvatarForUserCard from './AvatarForUserCard';
import Zoom from '@mui/material/Zoom';
import { useLazyQuery } from '@apollo/client';
import { GET_ONE_USER } from '../../../../graph-ql/pm-page-gql';
import {
  addVisitedUsersDataActionCreator,
  getSingleUserDataActionCreator,
} from '../../../../redux/reducers/pmPageReducer';
import { useDispatch } from 'react-redux';
import { displayStack } from '../../../../functions/displayStack';
import { singleUserData } from '../../../../interfaces/Pm-Page-types';
import { connect } from 'react-redux';

const UserCardData = ({
  visitedUsers,
  name,
  stack,
  id,
}: {
  visitedUsers: singleUserData[];
  name: string;
  stack: string[];
  id: string;
}) => {
  const dispatch = useDispatch();

  const [getUser, { data }] = useLazyQuery(GET_ONE_USER);

  const openUser = () => {
    const visitedUser = visitedUsers.find((el) => el._id === id);
    visitedUser
      ? dispatch(getSingleUserDataActionCreator(visitedUser))
      : getUser({ variables: { id } });
  };

  useEffect(() => {
    if (data) {
      dispatch(getSingleUserDataActionCreator(data.findUserByID));
      dispatch(addVisitedUsersDataActionCreator(data.findUserByID));
    }
  }, [data]);
  return (
    <Tooltip TransitionComponent={Zoom} title={displayStack(stack, 4)} followCursor>
      <ListItem button key={name} onClick={openUser}>
        <AvatarForUserCard name={name} />
        <ListItemText className="p-1" primary={name} />
      </ListItem>
    </Tooltip>
  );
};

const mapStateToProps = (state: { pmPage: { visitedUsersData: singleUserData[] } }) => {
  return {
    visitedUsers: state.pmPage.visitedUsersData,
  };
};

export default connect(mapStateToProps)(UserCardData);
