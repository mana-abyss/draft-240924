import { Building } from "./Building";
import { Element } from "./Element";

export interface Dungeon extends Record<`${Element}Percentage`, number> {
  floors: DungeonFloor[];
}

export interface DungeonFloor {
  buildings: Building[];
}
