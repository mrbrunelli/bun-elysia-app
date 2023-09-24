import { SignUpController } from "../../../../application/controllers/signup-controller";

export function makeSignUpController() {
  return new SignUpController();
}
