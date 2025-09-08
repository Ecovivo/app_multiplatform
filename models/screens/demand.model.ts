import type { FC } from "react";
import type { HandleVoid } from "../utils";
import type { ProjectType } from "../domain";
import type { DemandForm } from "../../stores";

export interface DeamandInput {
  handlePress: (type: ProjectType, items: DemandForm[]) => HandleVoid;
}

export type DeamandProps = FC<DeamandInput>;
