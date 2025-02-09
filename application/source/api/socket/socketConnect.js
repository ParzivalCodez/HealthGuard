// Dependencies & Packages Import
import { io } from "socket.io-client";

// Connection URL
const socketConnect = io("http://192.168.1.62:5000");
import { useMessages } from "./socket";

// Socket Connection Attempt
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
};

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

export default ConnectToSocket;
