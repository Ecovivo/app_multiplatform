import type { Dispatch, FC, SetStateAction } from "react";
import type { HandleVoid } from "../utils";
import type { ProjectType } from "../domain";

export interface SelectedInput {
  handleSelected: (value: ProjectType) => () => void;
}

export type SelectedProps = FC<SelectedInput>;
