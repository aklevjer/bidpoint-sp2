import { vi } from "vitest";

export const fetchMock = (response = {}, status = 200) => {
  return vi.fn().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status: status,
    json: () => Promise.resolve(response),
  });
};
