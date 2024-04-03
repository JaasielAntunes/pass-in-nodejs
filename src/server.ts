import fastify from "fastify";
import { createEvent } from "./routes/create-event";

const app = fastify();

app.register(createEvent);

app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running on port: http://localhost:3333");
});
