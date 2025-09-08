export interface Equip {
  name: string;
  type: string;
  power: number;
  average_daily_hour: number;
}

export interface HourEquip {
  power: number;
  hours: number;
  label: string;
}

export type GetCategories = () => string[];
export type GetItemByCategory = (category: string) => Equip[];
export type GetItemByKindAndCategory = (
  category: string,
  kind: string
) => HourEquip[];
