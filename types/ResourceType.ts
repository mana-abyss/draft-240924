import { Element } from "./Element";

type ResourceSuffixes =
  | "Stone"
  | "Oil"
  | "Gas"
  | "Herb"
  | "Wood"
  | "Fruit"
  | "Silk"
  | "Venom";

export type ResourceType =
  | `normal${ResourceSuffixes}`
  | `${Element}${ResourceSuffixes}`;
