import { Context } from "elysia";
import { Controller } from "../../application/controllers/controller";

export function adaptElysiaRouter(controller: Controller) {
  return async (context: Context) => {
    const { statusCode, data } = await controller.handle({
      ...context,
    });
    context.set.status = statusCode;
    return data;
  };
}
