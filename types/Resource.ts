import { Element } from "./Element";

type ElementalResource =
  | "Essence" // from other resources. for potion, scroll, upgrade, enchant, gold.
  | "Crystal" // from dungeon underground, low chance. for enchant, socket gem, gold.
  | "Metal" // from ore and fuel. for equipment, building, gold.
  | "Stone" // from dungeon underground. for fuel, building, gold.
  | "Ore" // from dungeon underground. for metal, gold.
  | "Herb" // from dungeon floor. for medicine, poison, essence, gold.
  | "Wood" // from dungeon's tree. for fuel, equipment, building, gold.
  | "Fruit"; // from dungeon's tree. for food, essence, gold.

export type Resource =
  | "diamond" // paid currency for everything, such as guaranteed upgrade.
  | "gold" // regular currency for almost everything, except for diamond-only.
  | `normal${Exclude<ElementalResource, "Essence" | "Crystal">}` // elemental properties can be removed.
  | `${Element}${ElementalResource}`;

export type RegularResource = Exclude<Resource, "diamond">;
