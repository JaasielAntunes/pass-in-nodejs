import fastify from "fastify";
import { createEvent } from "./routes/create-event";
import { env } from "./env";
import {
  ZodTypeProvider,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import { errorHandler } from "./error-handler";
import { registerForEvent } from "./routes/register-for-event";
import { getEvent } from "./routes/get-event";
import { checkIn } from "./routes/check-in";
import { getEventAttendees } from "./routes/get-event-attendees";
import { getAttendeeBadge } from "./routes/get-ateendee-badge";

export const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(checkIn);
app.register(getEventAttendees);
app.register(getAttendeeBadge);

app.setErrorHandler(errorHandler);

app.listen({ port: env.PORT, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running on port: http://localhost:3333");
});
