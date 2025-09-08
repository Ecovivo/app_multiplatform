import type { FC } from "react";
import type { ProjectType } from "../domain";

export interface SelectedInput {
  handlePress: (value: ProjectType) => () => void;
}

export type SelectedProps = FC<SelectedInput>;
