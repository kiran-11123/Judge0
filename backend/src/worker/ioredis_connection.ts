import { Redis } from "ioredis";

const bullmqConnection = new Redis({
  host: "localhost",
  port: 6379,
  maxRetriesPerRequest: null,
});


bullmqConnection.on("connect", () => {
  console.log("IORedis connected");
});

bullmqConnection.on("error", (err) => {
  console.log("Redis error:", err);
});

export default bullmqConnection;