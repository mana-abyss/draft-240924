export type Equipment = Accessory | Armor | Weapon;

export type Accessory = Ring | Bracelet | Necklace | Earring | Belt;
export type Armor = Helmet | Chestplate | Gloves | Boots | Bracers | Greaves;
export type Weapon = Shield | Sword | Dagger | Axe | Mace | Spear | Bow;

interface EquipmentBase<T> {
  type: T;
  name: string;
  data: unknown;
}

interface AccessoryBase<T> extends EquipmentBase<T> {
  size: number;
}

export interface Ring extends AccessoryBase<"ring"> {
  forThumb: boolean;
}

export interface Bracelet extends AccessoryBase<"bracelet"> {}

export interface Necklace extends AccessoryBase<"necklace"> {}

export interface Earring extends AccessoryBase<"earring"> {}

export interface Belt extends AccessoryBase<"belt"> {}

interface ArmorBase<T> extends EquipmentBase<T> {}

export interface Helmet extends ArmorBase<"helmet"> {}

export interface Chestplate extends ArmorBase<"chestplate"> {}

export interface Gloves extends ArmorBase<"gloves"> {}

export interface Boots extends ArmorBase<"boots"> {}

export interface Bracers extends ArmorBase<"bracers"> {}

export interface Greaves extends ArmorBase<"greaves"> {}

interface WeaponBase<T> extends EquipmentBase<T> {}

export interface Shield extends WeaponBase<"shield"> {}

export interface Sword extends WeaponBase<"sword"> {}

export interface Dagger extends WeaponBase<"dagger"> {}

export interface Axe extends WeaponBase<"axe"> {}

export interface Mace extends WeaponBase<"mace"> {}

export interface Spear extends WeaponBase<"spear"> {}

export interface Bow extends WeaponBase<"bow"> {}
