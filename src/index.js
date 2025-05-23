const config = require("./config/config");
const app = require("./app");
const logger = require("./config/logger");
const prismaClient = require("./utils/prismaClient");
// require("./instrument.js");

let server;

prismaClient.$connect().then(() => {
  logger.info("connected to MongoDB");
  server = app.listen(config.port, () => {
    logger.info(`server is running on port ${config.baseUrl}`);
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  logger.info("SIGTERM received");
  if (server) {
    server.close();
  }
});
