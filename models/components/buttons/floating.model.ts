import type { FC } from "react";
import type { HandleVoid } from "../../utils";
import type { ProjectType } from "../../domain";

interface FloatingInput {
  projectType: ProjectType;
  handlePress: HandleVoid;
}

export type FloatingProps = FC<FloatingInput>;
