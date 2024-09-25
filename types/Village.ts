import { Building } from "./Building";
import { Character } from "./Character";
import { Dungeon } from "./Dungeon";
import { Equipment } from "./Equipment";
import { RegularResource, Resource } from "./Resource";

export interface VillageData extends Record<`${Resource}`, number> {
  level: number;
  exp: number;
  dungeons: Dungeon[];
  buildings: Building[];
}

export interface Village
  extends VillageData,
    Record<
      | `${RegularResource}Capacity`
      | `${RegularResource}FixedProduction`
      | `${RegularResource}FixedConsumption`,
      number
    > {
  characters: Character[];
  equipments: Equipment[];
}
