import { Server } from "socket.io";
import { Server as HttpServer } from "http";

export default function initSockerServer(httpServer: HttpServer) {
  const socket = new Server(httpServer, { cors: { origin: "*" } });

  socket.on("connection", (socket) => {
    console.log("New client connected", socket.id);
    socket.on("typing", (text) => {
      console.log("Live typing:", text);
    });
    socket.on("message", (msg) => {
      console.log("Received message from client:", msg);
      // Broadcast to all connected clients
      socket.emit("message", `Client: ${msg}`);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected", socket.id);
    });
  });
}
