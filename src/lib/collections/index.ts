import aCosyEvening from "$lib/examples/a-cosy-evening.json";

type Attribute = {
  icon: string;
  value: number;
};

type Activity = {
  title: string;
  tags?: string[];
  attributes?: Attribute[];
};

type Section = {
  title: string;
  activities: Activity[];
};

export type Collection = {
  version: 1;
  title: string;
  sections: Section[];
};

export type CollectionSummary = {
  id: string;
  collection: Collection;
};

export const collections: CollectionSummary[] = [
  {
    id: "a-cosy-evening",
    collection: {
      ...aCosyEvening,
      version: 1
    }
  }
];

export function getCollection(id: string): CollectionSummary | undefined {
  return collections.find((entry) => entry.id === id);
}

export function activityCount(collection: Collection): number {
  return collection.sections.reduce(
    (total, section) => total + section.activities.length,
    0
  );
}
