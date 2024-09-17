import { describe, it, expect, afterEach, vi } from "vitest";
import * as mocks from "../mocks/index.mjs";
import { createListing } from "../../api/listings/index.mjs";

describe("createListing", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should return the created listing when API call is successful", async () => {
    globalThis.fetch = mocks.fetchMock(mocks.listingResponse);
    const createdListing = await createListing(mocks.newListing);
    expect(createdListing.data.id).toEqual(mocks.listingResponse.data.id);
  });

  it("should throw an error message on failure", async () => {
    globalThis.fetch = mocks.fetchMock({ errors: [] }, 400);
    await expect(createListing(mocks.newListing)).rejects.toThrow("Failed to create the listing");
  });
});
