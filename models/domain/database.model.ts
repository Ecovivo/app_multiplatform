import type { Project, ProjectType } from "./projects.model";

const ProjectBDTypes = [1, 2, 3, 4] as const;
export type ProjectBDType = (typeof ProjectBDTypes)[number];

export interface ProjectDB {
  name: string;
  type: ProjectBDType;
}

type TypeMapper = Record<ProjectType, ProjectBDType>;

export const typeProjectDBMapper: TypeMapper = {
  demand: 1,
  area: 2,
  budget: 3,
  adapted: 4,
};

export interface ProjectDTO extends ProjectDB {
  id: number;
}

export interface ProjectDAO extends Project {
  uuid: string;
}

export type GetType = (typeDB: ProjectBDType) => ProjectType;
export type GetProjectMapper = (resolve: ProjectDTO[]) => ProjectDAO[];
