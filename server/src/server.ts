import app from "./app.js";
import config from "@/config/env.config.js";
import logger from "@/lib/logger.lib.js";

const PORT = config.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server is running in http://localhost:${PORT}`);
});
