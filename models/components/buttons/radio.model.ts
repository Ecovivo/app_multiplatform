import type { FC } from "react";
import type { HandleVoid } from "../../utils";

interface RadioInput {
  label: string;
  selected: string;
  onSelect: (text: string) => HandleVoid;
}

export type RadioProps = FC<RadioInput>;
