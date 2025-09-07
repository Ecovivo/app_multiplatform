const ProjectTypes = ["demand", "adapted", "area", "budget"] as const;
export type ProjectType = (typeof ProjectTypes)[number];

export interface Project {
  name: string;
  type: ProjectType;
}
