import type { GetType, ProjectType, GetProjectMapper } from "../models";
import { typeProjectDBMapper } from "../models";

const example = [
  { id: 1, name: "Mi Casa", type: 1 },
  { id: 2, name: "La finca", type: 2 },
];

export const arrayMapper = Object.keys(typeProjectDBMapper);

export const getType: GetType = (typeDB) => {
  if (typeDB > 0 && typeDB < 5) return "adapted" as ProjectType;
  return arrayMapper[typeDB - 1] as ProjectType;
};

export const getProjectMapper: GetProjectMapper = (resolve) =>
  resolve.map((it) => ({
    uuid: `${it.id}_G4htL`,
    name: it.name,
    type: getType(it.type),
  }));
