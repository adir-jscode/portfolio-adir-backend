import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
import { envVars } from "./app/config/env";
let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);
    console.log("adir-portfolio db is connected ✅");
    server = app.listen(process.env.PORT || 5000, () => {
      console.log(
        "✅ Portfolio Server is running on port " + (process.env.PORT || 5000)
      );
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

process.on("unhandledRejection", (err) => {
  console.log("Unhandled rejection detected..Server is shutting down", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.log("uncaught Exception detected..Server shutting down..", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

//cloud related error
process.on("SIGTERM", (err) => {
  console.log("SIGTERM Signal Received..Server shutting down..", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

//manual server off
process.on("SIGINT", (err) => {
  console.log("SIGINT Signal Received..Server shutting down..", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
