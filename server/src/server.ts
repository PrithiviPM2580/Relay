import http from "node:http";
import config from "@/config/env.config.js";
import logger from "@/lib/logger.lib.js";
import initSockerServer from "./sockets/index.js";
import app from "./app.js";

const httpServer = http.createServer(app);

initSockerServer(httpServer);

const PORT = config.PORT || 3000;

httpServer.listen(PORT, () => {
  logger.info(`Server is running in http://localhost:${PORT}`);
});
