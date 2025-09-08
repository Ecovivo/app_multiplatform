import type { SelectType, CardMapper, IconMapper } from "../models";

import { money, trunder, area, gear, material } from "./vectors";

export const cardMapper: CardMapper = {
  demand: {
    label: "Por consumo eléctrico",
    description:
      "Por favor agregue sus equipos electrónicos para estimar se realizan a través del consumo eléctrico que le permita estar satisfecho.",
    uuid: "demand",
  },
  adapted: {
    label: "Por característica específicas",
    description:
      "Por favor agregue las restriciones generales para estimar su sistema fotovoltaico.",
    uuid: "adapted",
  },
  area: {
    label: "Por el área disponible",
    description:
      "Por favor agregue el área disponible para la instalación de los paneles solares.",
    uuid: "area",
  },
  budget: {
    label: "Según el presupuesto actual",
    description:
      "Por favor agregue su bolsillo de presupuestos para estimar su sistema fotovoltaico.",
    uuid: "budget",
  },
};

const titleMapper: IconMapper = {
  demand: "Demanda",
  adapted: "Adaptado",
  area: "Área",
  budget: "Presupuesto",
};

const iconMapper: IconMapper = {
  demand: trunder,
  adapted: gear,
  area: area,
  budget: money,
};

const iconDetailMapper: IconMapper = {
  demand: material,
  adapted: gear,
  area: area,
  budget: money,
};

type GetIconByUUID = (uuid: SelectType) => string;
export const getIconByUUID: GetIconByUUID = (uuid) => iconMapper[uuid];

type GetDetailIconByUUID = (uuid: SelectType) => string;
export const getDetailIconByUUID: GetDetailIconByUUID = (uuid) =>
  iconDetailMapper[uuid];

type GetTitleByUUID = (uuid: SelectType) => string;
export const getTitleByUUID: GetTitleByUUID = (uuid) => titleMapper[uuid];
