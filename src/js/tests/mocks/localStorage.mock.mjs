import { vi } from "vitest";

export const localStorageMock = () => {
  let store = {};

  return {
    setItem: vi.fn((key, value) => (store[key] = value.toString())),
    getItem: vi.fn((key) => store[key] || null),
    removeItem: vi.fn((key) => delete store[key]),
    clear: vi.fn(() => (store = {})),
  };
};
