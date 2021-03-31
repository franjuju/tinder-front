import React from 'react'
import "./Bottom.css"
import { IconButton } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import StarRateIcon from '@material-ui/icons/StarRate';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function Bottom() {
  return (
    <div className="Bottom">
      <IconButton className="Bottom__replay swipeButtons">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="Bottom__close swipeButtons">
        <CloseIcon fontSize="large"/>
      </IconButton>
      <IconButton className="Bottom__star swipeButtons">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="Bottom__favorite swipeButtons">
        <FavoriteIcon fontSize="large"/>
      </IconButton>
      <IconButton className="Bottom__flash swipeButtons">
        <FlashOnIcon fontSize="large"/>
      </IconButton>
    </div>
  )
}

export default Bottom;