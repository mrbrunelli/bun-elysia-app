import { Elysia } from "elysia";
import signup from "./routes/signup";

const app = new Elysia().use(signup).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
