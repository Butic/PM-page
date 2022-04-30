import * as React from 'react';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AvatarForUserCard from '../usersLeftBar/AvatarForUserCard';
import { singleUserData } from '../../../../interfaces/Pm-Page-types';
import classes from '../PmPage.module.css';
import { Role } from '../../../../interfaces/roleEnum';
import TopCardMenu from './TopCardMenu';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import {
  getSingleUserDataActionCreator,
  nullableUser,
} from '../../../../redux/reducers/pmPageReducer';
import { Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import BottomSelectMenu from './BottomSelectMenu';
import { cardInfo } from '../../../../interfaces/cardInfoEnum';
import ContentContainer from './contents/ContentContainer';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MainCard = ({ _id, name, email, projects, sideInfo, role, stack }: singleUserData) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [containerName, setContainerName] = React.useState(cardInfo.INFO);

  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
    showMenu && setShowMenu(false);
  };

  const changeMenu = () => {
    !showMenu ? setShowMenu(!showMenu) : dispatch(getSingleUserDataActionCreator(nullableUser));
  };

  let imageSrc = '';
  if (role === Role.DEVELOPER) imageSrc = '/img/developer.png';
  else if (role === Role.HR_MANAGER) imageSrc = '/img/hr.png';
  else imageSrc = '/img/pm.png';

  return (
    <>
      <CardHeader
        avatar={<AvatarForUserCard name={name} />}
        action={
          <>
            <IconButton onClick={changeMenu} aria-label="settings">
              {!showMenu ? (
                <MoreVertIcon />
              ) : (
                <Tooltip TransitionComponent={Zoom} title="Close card frame">
                  <CloseIcon />
                </Tooltip>
              )}
            </IconButton>
            {showMenu && <TopCardMenu setShowMenu={setShowMenu} />}
          </>
        }
        title={name}
        subheader={email}
      />
      <CardMedia
        className={classes.targeted_user_img}
        component="img"
        height="200"
        width="200"
        image={imageSrc}
        alt={role}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {sideInfo}
        </Typography>
      </CardContent>
      <CardActions sx={{marginTop: -5, display: 'flex', alignItems:'center'}} disableSpacing>
        <IconButton aria-label="share">
          <BottomSelectMenu expanded={expanded} setExpanded={setExpanded} setContainerName={setContainerName}/>
        </IconButton>
        <span className={classes.info_container}>{containerName}</span>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <ContentContainer stack={stack} projects={projects} containerName={containerName} name={name}/>
        </CardContent>
      </Collapse>
    </>
  );
};

export default MainCard;
