import React from 'react';
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import "./swipeButton.css";
import { IconButton } from '@material-ui/core';
const SwipeButton = () => {
    return (
        <div className="swipeButton">
            <div className="icon">
            <IconButton>
             <ReplayIcon className="replay" fontSize="large" />
            </IconButton>
            <IconButton>
                <CloseIcon className="close" fontSize="large" />
            </IconButton>
            <IconButton>
            <StarRateIcon className="star" fontSize="large"/>
            </IconButton>
            
            <IconButton>
            <FavoriteIcon className="favorite" fontSize="large"/>
            </IconButton>
            <IconButton>
            <FlashOnIcon className="flash" fontSize="large"/>
            </IconButton>
            </div>
        </div>
    )
}

export default SwipeButton
