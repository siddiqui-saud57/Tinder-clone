import React from 'react'
import Chat from "./Chat";
import "./Chats.css";
const Chats = () => {
    return (
        <div className="chats">
          <Chat  
          name="Dua"
          message="Hey! how are you"
          timeMessage="30mins"
          profilepic="https://media.allure.com/photos/5e74d24c86a8240008b7f3e7/4:3/w_2664,h_1998,c_limit/dua%20lipa%20grammys.jpg"
           />  
            <Chat
            name="Dua"
          message="Hey! how are you"
          timeMessage="30mins"
          profilepic="https://media.allure.com/photos/5e74d24c86a8240008b7f3e7/4:3/w_2664,h_1998,c_limit/dua%20lipa%20grammys.jpg"
           />  
            <Chat
          name="Dua"
          message="Hey! how are you"
          timeMessage="30mins"
          profilepic="https://media.allure.com/photos/5e74d24c86a8240008b7f3e7/4:3/w_2664,h_1998,c_limit/dua%20lipa%20grammys.jpg"
           />  
        </div>
    )
}

export default Chats
