import { Elysia, t } from "elysia";
import { adaptElysiaRouter } from "../adapter/elysia-router";
import { makeSignUpController } from "../factories/application/controllers/signup-controller";

export default new Elysia().post(
  "/signup",
  adaptElysiaRouter(makeSignUpController()),
  {
    body: t.Object({
      username: t.String(),
      password: t.String(),
    }),
  }
);
