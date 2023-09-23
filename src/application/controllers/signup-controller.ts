import { HttpResponse } from "../helpers/http";
import { Controller } from "./controller";

export class SignUpController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    return {
      data: "user registered successfully",
      statusCode: 201,
    };
  }
}

type HttpRequest = {
  body: any;
};
