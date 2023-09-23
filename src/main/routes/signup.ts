import Elysia from "elysia";
import { SignUpController } from "../../application/controllers/signup-controller";
import { adaptElysiaRouter } from "../adapter/elysia-router";

export default new Elysia().post(
  "/signup",
  adaptElysiaRouter(new SignUpController())
);
