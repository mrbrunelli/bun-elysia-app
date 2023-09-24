import { describe, expect, it } from "bun:test";
import { app } from "../../../src/main/app";

describe("SignUp routes", () => {
  describe("POST /signup", () => {
    const url = "http://localhost/signup";

    it("should return 201 with user success message", async () => {
      const response = await app.handle(
        new Request({
          url,
          method: "POST",
          body: new URLSearchParams({
            username: "valid-username",
            password: "valid-password",
          }),
        })
      );

      expect(response.status).toBe(201);
      expect(await response.text()).toBe("user registered successfully");
    });

    it("should return 400 if username is missing", async () => {
      const response = await app.handle(
        new Request(url, {
          method: "POST",
          body: new URLSearchParams({
            password: "valid-password",
          }),
        })
      );

      expect(response.status).toBe(400);
    });

    it("should return 400 if password is missing", async () => {
      const response = await app.handle(
        new Request(url, {
          method: "POST",
          body: new URLSearchParams({
            username: "valid-username",
          }),
        })
      );

      expect(response.status).toBe(400);
    });
  });
});
