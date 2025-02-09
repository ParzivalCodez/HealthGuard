// MessageContext.js
import React, { createContext, useState, useContext } from "react";

// Context
const GlobalEmitter = createContext();

export const useMessages = () => useContext(GlobalEmitter);
const socketConnect = io("http://192.168.1.62:5000");
import { io } from "socket.io-client";

const ConnectToSocket = () => {
  socketConnect.on("connect", () => {
    console.log(`Client Connected with ID: #${socketConnect.id}`);
    socketConnect.emit("device-identifier", {
      type: "Phone",
      id: socketConnect.id,
    });
    socketConnect.on("receive-message", (message) => {
      console.log(message);
    });
  });

export const MessageProvider = ({ children }) => {


  class SocketProfile {
    constructor(message) {
      this.message = message;
    }

    send() {
      socketConnect.emit("phone-to-server", this.message);
    }
  }

  async function SocketManager(query, message) {
    const SocketInstance = new SocketProfile(message);

    switch (query) {
      case "send":
        SocketInstance.send();
        break;
    }
  }

  // React Hooks
  const [messages, setMessages] = useState([]);
  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <GlobalEmitter.Provider value={{ messages, addMessage }}>
      {children}
    </GlobalEmitter.Provider>
  );
};

export default MessageProvider;
