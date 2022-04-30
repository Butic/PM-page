import React from 'react';
import ImageCoin from '../ImageCoin/ImageCoin';
import cl from './WSfront.module.css';

const WSfront: React.FC = () => {
  const handleClick = ():void => {
    alert('!!!');
  };
  
  return (
    <div className={cl.wrapper}>
      <div className={cl.reportButton}
        onClick={handleClick}
      >
        <ImageCoin />
      </div>
    </div>
  );
};
export default WSfront;