import type { SelectType } from "../domain";

export interface StyleColors {
  bg: string;
  text: string;
  primary: string;
  success: string;
  warning: string;
  danger: string;
}

export type IconMapper = Record<SelectType, string>;
