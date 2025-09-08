import type { FC } from "react";
import type { ProjectDAO, ProjectType } from "../domain";

interface ProjectsInput {
  projects: ProjectDAO[];
  handlePress: (value: ProjectType, id: number) => () => void;
}

export type ProjectsProps = FC<ProjectsInput>;
