import { Redis } from "ioredis";

const bullmqConnection = new Redis({
  host: "localhost",
  port: 6379,
  maxRetriesPerRequest: null,
});

export default bullmqConnection;