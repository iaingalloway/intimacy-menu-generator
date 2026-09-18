import { error } from "@sveltejs/kit";
import { collections, getCollection } from "$lib/collections";
import type { EntryGenerator, PageLoad } from "./$types";

export const entries: EntryGenerator = () =>
  collections.map(({ id }) => ({ collectionId: id }));

export const load: PageLoad = ({ params }) => {
  const entry = getCollection(params.collectionId);

  if (!entry) {
    error(404, "Collection not found");
  }

  return entry;
};
