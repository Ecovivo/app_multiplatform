import type { FC } from "react";
import type { HandleVoid } from "../../utils";

interface RadioInput {
  label: string;
  selected: boolean;
  onSelect: HandleVoid;
}

export type RadioProps = FC<RadioInput>;
