import { describe, expect, it } from "vitest";
import { activityCount, collections, getCollection } from "./index";

describe("bundled collections", () => {
  it("registers the cosy evening menu", () => {
    const collection = getCollection("a-cosy-evening");

    expect(collection?.collection.title).toBe("A cosy evening");
    expect(collection?.collection.sections).toHaveLength(4);
    expect(activityCount(collection!.collection)).toBe(19);
  });

  it("returns no collection for an unknown identifier", () => {
    expect(getCollection("unknown")).toBeUndefined();
    expect(collections).toHaveLength(1);
  });
});
