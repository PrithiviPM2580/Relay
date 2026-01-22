import { Server } from "socket.io";
import { Server as HttpServer } from "http";

export default async function initSockerServer(httpServer: HttpServer) {
  const io = new Server(httpServer, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    console.log("New client connected", socket.id);

    socket.on("disconnect", () => {
      console.log("Client disconnected", socket.id);
    });
  });
}
