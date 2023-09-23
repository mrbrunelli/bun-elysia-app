import { Elysia } from "elysia";
import signup from "./routes/signup";

export const app = new Elysia().use(signup);
