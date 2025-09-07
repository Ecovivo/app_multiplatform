import type { FC } from "react";
import type { ProjectType } from "../domain";

export interface DeamandInput {
  projectType: ProjectType;
}

export type DeamandProps = FC<DeamandInput>;
