import React from 'react';
import {Link} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import "./Chat.css"

const Chat = ({name,message,timeMessage,profilepic}) => {
    return (
        <Link to={`/chat/${name}`}>
        <div className="chat">
        <Avatar src={profilepic} className="chat__image" />
        <div className="column">
        <h2>{name}</h2>
        <p className="message1">{message}</p>
        </div>
        <p className="message2">{timeMessage}</p>
        </div>
        </Link>
    )
}

export default Chat
