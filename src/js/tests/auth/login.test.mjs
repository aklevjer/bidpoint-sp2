import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import * as mocks from "../mocks/index.mjs";
import { login } from "../../api/auth/index.mjs";

describe("login", () => {
  beforeEach(() => {
    globalThis.localStorage = mocks.localStorageMock();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should store a token when provided with valid credentials", async () => {
    globalThis.fetch = mocks.fetchMock(mocks.authResponse);
    await login(mocks.validCredentials);

    const token = JSON.parse(localStorage.getItem("accessToken"));
    expect(token).toEqual(mocks.authResponse.data.accessToken);
  });

  it("should throw an error when provided with invalid credentials", async () => {
    globalThis.fetch = mocks.fetchMock(mocks.authErrorResponse, 401);
    await expect(login(mocks.invalidCredentials)).rejects.toThrow("Invalid email or password");
  });
});
