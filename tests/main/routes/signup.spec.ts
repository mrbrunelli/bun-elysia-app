import { describe, expect, it } from "bun:test";
import { app } from "../../../src/main/app";

describe("signup routes", () => {
  it("POST /signup", async () => {
    const response = await app.handle(
      new Request("http://localhost/signup", {
        method: "POST",
        body: JSON.stringify({
          username: "valid-username",
          password: "valid-password",
        }),
      })
    );

    expect(response.status).toBe(201);
    expect(await response.text()).toBe("user registered successfully");
  });
});
