import type { GetProjectMapper, GetTypeProject } from "../models";
import type { GetType, ProjectType } from "../models";
import { typeProjectDBMapper } from "../models";

export const arrayMapper = Object.keys(typeProjectDBMapper);

export const getType: GetType = (typeDB) => {
  if (0 < typeDB && typeDB > 5) return "adapted" as ProjectType;
  return arrayMapper[typeDB - 1] as ProjectType;
};

export const getProjectMapper: GetProjectMapper = (resolve) =>
  resolve.map((it) => {
    const { name, id } = it;
    const uuid = `g4htL${it.id}`;
    const type = getType(it.type);
    return { uuid, name, type, id };
  });

export const getTypeProject: GetTypeProject = (type) => {
  if (Object.keys(typeProjectDBMapper).includes(type)) {
    return typeProjectDBMapper[type];
  }
  return 4;
};
