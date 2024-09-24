import { Building } from "./Building";
import { Dungeon } from "./Dungeon";
import { ResourceType } from "./ResourceType";

export interface VillageData
  extends Record<`${ResourceType}Capacity` | `${ResourceType}`, number> {
  level: number;
  exp: number;
  dungeons: Dungeon[];
  buildings: Building[];
}

export interface Village
  extends VillageData,
    Record<
      `${ResourceType}FixedProduction` | `${ResourceType}FixedConsumption`,
      number
    > {
  //
}
