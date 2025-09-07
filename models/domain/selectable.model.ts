const SelectTypes = ["demand", "adapted", "area", "budget"] as const;
export type SelectType = (typeof SelectTypes)[number];

export interface Selectable {
  description: string;
  label: string;
  uuid: SelectType;
}

export type CardMapper = Record<SelectType, Selectable>;
