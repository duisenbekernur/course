import React from "react";
import ChatMessages from "../components/ChatMessages";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Chat = () => {
  return (
    <div className="chat">
      <Header />
      <div className="chat-content">
        <Sidebar />
        <ChatMessages />
      </div>
    </div>
  );
};

export default Chat;
