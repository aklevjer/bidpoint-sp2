import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { validateInput } from "../../utils/validation/index.mjs";

describe("validateInput", () => {
  beforeEach(() => {
    vi.mock("../../handlers/ui/index.mjs", () => ({
      toggleInputError: vi.fn(),
    }));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("Username Validation", () => {
    it("should return true for a username with valid characters and length (max 20 chars)", () => {
      const inputElement = { name: "name", value: "valid_username123" };
      expect(validateInput(inputElement)).toBe(true);
    });

    it("should return false for a username with invalid characters or length exceeding 20 chars", () => {
      const inputElement = { name: "name", value: "Invalid username!" };
      expect(validateInput(inputElement)).toBe(false);
    });
  });

  describe("Email Validation", () => {
    it("should return true if email ends with @stud.noroff.no", () => {
      const inputElement = { name: "email", value: "user@stud.noroff.no" };
      expect(validateInput(inputElement)).toBe(true);
    });

    it("should return false if email does not end with @stud.noroff.no", () => {
      const inputElement = { name: "email", value: "user@example.com" };
      expect(validateInput(inputElement)).toBe(false);
    });
  });

  describe("Password Validation", () => {
    it("should return true if password is at least 8 characters", () => {
      const inputElement = { name: "password", value: "password1234" };
      expect(validateInput(inputElement)).toBe(true);
    });

    it("should return false if password is less than 8 characters", () => {
      const inputElement = { name: "password", value: "short" };
      expect(validateInput(inputElement)).toBe(false);
    });
  });

  describe("Title Validation", () => {
    it("should return true if title is between 1 and 280 characters", () => {
      const inputElement = { name: "title", value: "Valid Title" };
      expect(validateInput(inputElement)).toBe(true);
    });

    it("should return false if title is more than 280 characters", () => {
      const inputElement = { name: "title", value: "A".repeat(281) };
      expect(validateInput(inputElement)).toBe(false);
    });
  });

  describe("Ending Date Validation", () => {
    it("should return false for an ending date in the past", () => {
      const inputElement = { name: "endsAt", value: "2020-01-01T00:00:00Z" };
      expect(validateInput(inputElement)).toBe(false);
    });
  });

  describe("Description Validation", () => {
    it("should return true if description is between 0 and 280 characters", () => {
      const inputElement = { name: "description", value: "Valid description" };
      expect(validateInput(inputElement)).toBe(true);
    });

    it("should return false if description is more than 280 characters", () => {
      const inputElement = { name: "description", value: "A".repeat(281) };
      expect(validateInput(inputElement)).toBe(false);
    });
  });

  describe("Amount Validation", () => {
    it("should return true if amount is greater than 0", () => {
      const inputElement = { name: "amount", value: "10" };
      expect(validateInput(inputElement)).toBe(true);
    });

    it("should return false if amount is 0 or less", () => {
      const inputElement = { name: "amount", value: "0" };
      expect(validateInput(inputElement)).toBe(false);
    });
  });
});
