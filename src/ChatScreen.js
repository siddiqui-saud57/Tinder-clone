import React,{useState} from 'react';
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

const ChatScreen = () => {
    const [input,setInput] = useState("")
    const [messages,setMessages] = useState([
        {
            name:"Dua",
            image:"https://media.allure.com/photos/5e74d24c86a8240008b7f3e7/4:3/w_2664,h_1998,c_limit/dua%20lipa%20grammys.jpg",
            message:"hey how are you"
        },
        {
            name:"Dua",
            image:"https://media.allure.com/photos/5e74d24c86a8240008b7f3e7/4:3/w_2664,h_1998,c_limit/dua%20lipa%20grammys.jpg",
            message:"Whatsup"
        }
        ,
        {
            message:"Hi how are you dua"
        }
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, {message:input}])       
        setInput("");
    }
    return (
        <div className="chatScreen">
            <h2 className="h">You matched with with Dua on 10/03/21</h2>
            {messages.map((message) => 
            message.name ? (
                <div className="chatScreen__message">
                <Avatar 
                className="chatScreen__image"
                src={message.image}
                />
                <p className="mssg">{message.message}</p>
                </div>
            ):(
                <div className="chatScreen__message">
                    <p className="text">{message.message}</p>
                </div>
                
            ) 
            )}

            
                <form className="chatScreen__input">
                    <input value={input} onChange={e => setInput(e.target.value)} className="chatScreen__inputField" type="text" placeholder="send a message"/>
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>

        </div>
    )
}

export default ChatScreen
