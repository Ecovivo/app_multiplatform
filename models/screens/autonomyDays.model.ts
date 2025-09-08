import type { FC } from "react";
import type { HandleVoid } from "../utils";

export interface AutonomyDaysInput {
  handlePress: (value: number) => HandleVoid;
}

export type AutonomyDaysProps = FC<AutonomyDaysInput>;
