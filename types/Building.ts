export interface Building<T = unknown> {
  positionX: number;
  positionY: number;
  type: BuildingType<T>;
  level: number;
  state: T;
}

export interface BuildingType<T> {
  name: string;
  sizeX: number;
  sizeY: number;
}
