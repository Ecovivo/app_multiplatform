interface ResultChips {
  title: string;
  label: string;
}

interface ResultComponents {
  units: number;
  name: string;
  url: string;
}

interface Result {
  chips: ResultChips[][];
  components: ResultComponents[];
}

export const result: Result = {
  chips: [
    [
      {
        title: "12 KW",
        label: "Generado por año",
      },
      {
        title: "$5.1 M",
        label: "Inversión inicial",
      },
    ],
    [
      {
        title: "4 M2",
        label: "Espacio requerido",
      },
      {
        title: "0.2 Tn",
        label: "Carbono equivalente",
      },
    ],
  ],
  components: [
    {
      units: 4,
      name: "Panel solar monocristalino 240w",
      url: "https://autosolar.co/paneles-solares-12v/panel-solar-monocristalino-240w-tensite",
    },
    {
      units: 2,
      name: "Bateria gel 12v 300ah",
      url: "https://autosolar.co/baterias-gel-12v/bateria-gel-12v-300ah-tensite",
    },
    {
      units: 1,
      name: "Inversor de corriente onda pura 600w",
      url: "https://autosolar.co/inversores-de-corriente/inversor-de-corriente-onda-pura-600w-12v-belttt",
    },
    {
      units: 1,
      name: "Controlador carga bluesolar",
      url: "https://autosolar.co/controladores-de-carga-mppt/controlador-carga-bluesolar-mppt-100v-20a-48v-victron-energy",
    },
  ],
};
