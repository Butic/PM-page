import React, { useEffect, useState } from 'react';
import { profileCardInterface } from '../../../interfaces/profile-card-interface';
import classes from './ProfileCard.module.css';

const ProfilePage = ({
  name,
  role,
  experience,
  projects,
  tasks,
  stack,
  sideInfo,
}: profileCardInterface) => {
  const [isFrontSide, setIsFrontSide] = useState(true);
  const [flipText, setFlipText] = useState(false);
  const [frameStyle, setFrameStyle] = useState(
    classes.front_img + ' ' + classes.profileCard__frame,
  );

  useEffect(() => {
    setFrameStyle(frameStyle + ' ' + classes.rotate);
    setTimeout(() => {
      isFrontSide
        ? setFrameStyle(classes.front_img + ' ' + classes.profileCard__frame)
        : setFrameStyle(classes.profileCard__frame + ' ' + classes.back_img);
      setFlipText(!flipText);
    }, 500);
  }, [isFrontSide]);

  const flipSide = () => {
    setIsFrontSide(!isFrontSide);
  };

  return (
    <div className={frameStyle} onClick={flipSide}>
      {flipText ? (
        <>
          <h2 className={classes.profileCard__description}>Name: {name}</h2>
          <h3 className={classes.profileCard__description}>Role: {role}</h3>
          <h4 className={classes.profileCard__description}>Experience: {experience}</h4>
          <h4 className={classes.profileCard__description}>
            Projects: {projects.map((el) => el + '\n')}
          </h4>
        </>
      ) : (
        <>
          <h3 className={classes.profileCard__description}>
            Tasks: {tasks.map((el) => el + '\n')}
          </h3>
          <h3 className={classes.profileCard__description}>Stack: {stack}</h3>
          <h3 className={classes.profileCard__description}>Info: {sideInfo}</h3>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
