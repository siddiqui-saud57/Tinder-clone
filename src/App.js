import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButton from "./SwipeButton";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/chat/:person">
          <Header backButton="/chat" />
          <ChatScreen />
        </Route>
        <Route path="/chat">
          <Header backButton = "/"  />
          {/* <h1>I am Chat</h1> */}
          <Chats />
        </Route>
        <Route path="/">
        <Header />
          <TinderCards />
          <SwipeButton />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
