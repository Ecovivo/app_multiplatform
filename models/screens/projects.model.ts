import type { FC } from "react";
import type { ProjectDAO } from "../domain";

interface ProjectsInput {
  projects: ProjectDAO[];
}

export type ProjectsProps = FC<ProjectsInput>;
