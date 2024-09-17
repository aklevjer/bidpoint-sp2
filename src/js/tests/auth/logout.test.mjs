import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import * as mocks from "../mocks/index.mjs";
import { handleLogout } from "../../handlers/auth/index.mjs";

describe("logout", () => {
  beforeEach(() => {
    globalThis.localStorage = mocks.localStorageMock();
    globalThis.location = { href: "" };
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should clear the token from local storage", () => {
    localStorage.setItem("accessToken", mocks.authResponse.data.accessToken);
    handleLogout();
    expect(localStorage.getItem("accessToken")).toBeNull();
  });

  it("should clear the profile from local storage", () => {
    localStorage.setItem("profile", JSON.stringify(mocks.profile));
    handleLogout();
    expect(localStorage.getItem("profile")).toBeNull();
  });

  it("should redirect to the homepage", () => {
    handleLogout();
    expect(globalThis.location.href).toBe("/");
  });
});
