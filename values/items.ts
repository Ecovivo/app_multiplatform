interface Constraint {
  label: string;
  description: string;
  options: Options[];
}

export interface Options {
  value: number;
  label: string;
}

export const dischargeDepthValue: Constraint = {
  label: "Profundidad de descarga",
  description:
    "Es qué tanto se vacía las batería antes de recargarla. En baterías vaciarlas completamente las daña pero un bajo nivel de descarga encarese el sistema.",
  options: [
    {
      value: 0.2,
      label: "Mínimo admitido",
    },
    {
      value: 0.6,
      label: "Promedio admisible",
    },
    {
      value: 0.8,
      label: "Máximo razonable",
    },
  ],
};

export const autonomyDays: Constraint = {
  label: "Días de Autonomía",
  description:
    "Cuántos días puede funcionar tu sistema sin recargarse con la energia solar. Esto es vital para cuando hay mal tiempo o fallas. Más días de autonomía = baterías más grandes = mayor costo, pero también mayor seguridad de no quedarte sin energía.",
  options: [
    {
      value: 1,
      label: "Mínimo admitido",
    },
    {
      value: 3,
      label: "Promedio admisible",
    },
    {
      value: 5,
      label: "Máximo razonable",
    },
  ],
};

export const plantFactor: Constraint = {
  label: "Factor de planta",
  description:
    "Es una capacidad adicional al requerimiento actual que previene de: picos inesperados de consumo, desgaste natural de los equipos, errores de cálculo o días con más demanda de lo normal",
  options: [
    {
      value: 0.1,
      label: "Mínimo admitido",
    },
    {
      value: 0.25,
      label: "Promedio admisible",
    },
    {
      value: 0.5,
      label: "Máximo razonable",
    },
  ],
};
