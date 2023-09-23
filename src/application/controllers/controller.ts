import { HttpResponse } from "../helpers/http";

export interface Controller {
  handle(httpRequest: any): Promise<HttpResponse>;
}
