import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosButton from "@material-ui/icons/ArrowBackIos"
import "./Header.css";
import { IconButton } from '@material-ui/core';
import {Link,useHistory} from "react-router-dom";

const Header = ({backButton}) => {
    const history = useHistory()
    return (
        <div className="header">
            {backButton ? (
                <IconButton fontSize="large" onClick={() => history.replace(backButton)}>
               <ArrowBackIosButton />
                </IconButton>
            ):(
               <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
            </IconButton> 
            )} 
         
               <Link to="/">
               <img src="https://cdn.designrush.com/uploads/inspirations/2354/crop_683_410__1513706350_604_tin.png" className="header__image" alt="pic" />
               </Link>
               <Link to="/chat">
               <IconButton>
                <ForumIcon fontSize="large"/>
                </IconButton> 
                </Link>  
        </div>
    )
}

export default Header
