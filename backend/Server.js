// Dependencies & Packages Import
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const database = require("./database/database.js");
const WebRouter = require("./middleware/routes.js");

const io = require("socket.io")(5000, {
  cors: {
    origin: ["exp://192.168.1.62:8081"],
  },
});

// Use a Map to store connections, where each key is a device identifier (watch or phone),
// and the value is the corresponding socket ID for direct communication.
const connections = new Map();

io.on("connection", (socket) => {
  // Assuming `data` contains `{ type: 'watch' or 'phone', id: 'unique_identifier' }`
  socket.on("device-identifier", (data) => {
    // Store the connection with device identifier as the key and socket ID as the value
    connections.set(data.type, socket.id);
    console.log(connections);
  });

  socket.on("watch-to-server", (message) => {
    // console.log(message);
    // Assuming `message` contains `{ target: 'target_phone_id', data: 'your_message' }`
    let target = connections.get("Phone");
    io.to(target).emit("receive-message", message);
  });

  socket.on("phone-to-server", (message) => {
    // Assuming `message` contains `{ target: 'target_watch_id', data: 'your_message' }`
    const targetSocketId = connections.get(message.target);
    if (targetSocketId) {
      io.to(targetSocketId).emit("receive-message", message);
    }
  });

  socket.on("disconnect", () => {
    // Find and remove the disconnected socket from the connections Map
    for (let [id, sockId] of connections.entries()) {
      if (sockId === socket.id) {
        connections.delete(id);
        break; // Exit the loop after finding and removing the disconnected socket
      }
    }
  });
});

// Miscellaneous
const PORT = 3000;

// Database Connection
database.connect();

// Body Parser Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Configuration
app.use(cors());

// External Routers
app.use(WebRouter);

// Server Activity Listen
app.listen(PORT, () => console.log(`Server is Active on PORT ${PORT}`));
