import config from "config";
import cluster from "cluster";
import { cpus } from "os";
import { MongoClient } from "mongodb";
import app from "./app";
import socket from "./utils/socket.server";

const logger = console;
const port = 8080;
const isClusteringEnabled = config.get("clustering") === "on";
const cpuCount = cpus().length;

const onExit = (worker, code, signal) => {
  let message;

  if (signal) {
    message = `Worker ${worker.process.pid} was killed by signal ${signal}`;
  } else if (code !== 0) {
    message = `Worker ${worker.process.pid} exited with error code ${code}`;
  } else {
    message = `Worker ${worker.process.pid} exited with no error`;
  }

  message = `${message}. Forking a new one.`;
  logger.error(message);
  app.locals.monitoring.batchMetricData("dead-workers-count", 1);
  cluster.fork();
};

const startSever = () => {
  if (isClusteringEnabled && cpuCount > 1 && cluster.isMaster) {
    logger.info("Process started");

    for (let i = 0; i < cpuCount; i++) {
      logger.info("Forking a new worker");
      cluster.fork();
    }

    // Listen for dying workers and create a new one
    cluster.on("exit", onExit);
  } else {
    // Create a MongoDB connection pool and start the application
    // after the database connection is ready
    MongoClient.connect(config.get("mongo.connect_url"), (mongoErr, client) => {
      if (mongoErr) {
        console.error(
          `Failed to connect to the database. ${mongoErr.stack}`,
          mongoErr
        );
        return;
      }

      const db = client.db(config.get("mongo.db"));

      app.locals.db = db;
      const server = app.listen(port, err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(`app is listening at http://localhost:${port}`);
      });

      // setup socket.io
      socket(server);
    });
  }
};

startSever();
