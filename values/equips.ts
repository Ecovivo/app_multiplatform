import type { Equip, GetCategories, GetItemByCategory } from "../models";
import type { GetItemByKindAndCategory } from "../models";

const equips: Equip[] = [
  {
    name: "Lavadora",
    type: "Carga frontal, hasta 19KG",
    power: 500,
    average_daily_hour: 2.0,
  },
  {
    name: "Lavadora",
    type: "Carga frontal, m\u00e1s de 19KG",
    power: 800,
    average_daily_hour: 2.0,
  },
  {
    name: "Electrodomésticos",
    type: "SECADORA DE ROPA",
    power: 5600,
    average_daily_hour: 1.0,
  },
  {
    name: "Electrodomésticos",
    type: "CALENTADOR DE AGUA",
    power: 5000,
    average_daily_hour: 1.0,
  },
  {
    name: "Electrodomésticos",
    type: "DUCHA ELECTRICA",
    power: 3500,
    average_daily_hour: 1.0,
  },
  {
    name: "Electrodomésticos",
    type: "HORNO ELECTRICO",
    power: 2000,
    average_daily_hour: 1.0,
  },
  {
    name: "Electrodomésticos",
    type: "HORNO MICROONDAS",
    power: 1300,
    average_daily_hour: 1.0,
  },
  {
    name: "Electrodomésticos",
    type: "TOSTADOR ELECTRICO",
    power: 900,
    average_daily_hour: 0.5,
  },
  {
    name: "Electrodomésticos",
    type: "FREIDORA DE AIRE",
    power: 1800,
    average_daily_hour: 1.0,
  },
  {
    name: "Electrodomésticos",
    type: "LICUADORA",
    power: 400,
    average_daily_hour: 2.0,
  },
  {
    name: "Electrodomésticos",
    type: "CAFETERA",
    power: 900,
    average_daily_hour: 3.0,
  },
  {
    name: "Electrodomésticos",
    type: "DVD",
    power: 25,
    average_daily_hour: 4.0,
  },
  {
    name: "Electrodomésticos",
    type: "ABRELATAS ELECTRICO",
    power: 70,
    average_daily_hour: 0.5,
  },
  {
    name: "Electrodomésticos",
    type: "BATIDORA ELECTRICA",
    power: 300,
    average_daily_hour: 0.5,
  },
  {
    name: "Electrodomésticos",
    type: "EXTRACTOR DE FRUTAS Y LEGUMBRES",
    power: 400,
    average_daily_hour: 0.5,
  },
  {
    name: "Electrodomésticos",
    type: "MAQUINA DE COSER",
    power: 150,
    average_daily_hour: 2.0,
  },
  {
    name: "Electrodomésticos",
    type: "SECADOR DE CABELLO",
    power: 1700,
    average_daily_hour: 0.5,
  },
  {
    name: "Electrodomésticos",
    type: "Aspiradora",
    power: 1600,
    average_daily_hour: 2.0,
  },
  {
    name: "Electrodomésticos",
    type: "Equipo de sonido",
    power: 800,
    average_daily_hour: 6.0,
  },
  {
    name: "Electrodomésticos",
    type: "PLANCHA ",
    power: 1200,
    average_daily_hour: 2.0,
  },
  {
    name: "Electrónicos",
    type: "Lapto",
    power: 225,
    average_daily_hour: 8.0,
  },
  {
    name: "Electrónicos",
    type: "Impresora",
    power: 150,
    average_daily_hour: 1.0,
  },
  {
    name: "Electrónicos",
    type: "Router",
    power: 15,
    average_daily_hour: 24.0,
  },
  {
    name: "Electrónicos",
    type: "Consola de juegos",
    power: 300,
    average_daily_hour: 4.0,
  },
  {
    name: "Electrónicos",
    type: "Cargador de celular",
    power: 5,
    average_daily_hour: 5.0,
  },
  {
    name: "Ventilador",
    type: "Mesa o Techo",
    power: 75,
    average_daily_hour: 8.0,
  },
  { name: "Ventilador", type: "Torre", power: 80, average_daily_hour: 8.0 },
  { name: "Ventilador", type: "Piso", power: 150, average_daily_hour: 8.0 },
  {
    name: "Nevera",
    type: "340 L / 11-12 pies cubicos",
    power: 300,
    average_daily_hour: 24.0,
  },
  {
    name: "Nevera",
    type: "450 L / 14-16 pies cubicos",
    power: 350,
    average_daily_hour: 24.0,
  },
  {
    name: "Nevera",
    type: "625 L / 18-22 pies cubicos",
    power: 400,
    average_daily_hour: 24.0,
  },
  {
    name: "Nevera",
    type: "765 L / 25-27 pies cubicos",
    power: 650,
    average_daily_hour: 24.0,
  },
  {
    name: "Nevera",
    type: "Antigua m\u00e1s de 15 a\u00f1os",
    power: 700,
    average_daily_hour: 24.0,
  },
  {
    name: "Aire Acondicionado",
    type: "Ventana Antiguo 1Ton - 12.000BTU",
    power: 1900,
    average_daily_hour: 8.0,
  },
  {
    name: "Aire Acondicionado",
    type: "Ventana Nuevo 1Ton - 12.000BTU",
    power: 1300,
    average_daily_hour: 8.0,
  },
  {
    name: "Aire Acondicionado",
    type: "Ventana Antiguo 1Ton - 12.000BTU",
    power: 2300,
    average_daily_hour: 8.0,
  },
  {
    name: "Aire Acondicionado",
    type: "Ventana Nuevo 1Ton - 12.000BTU",
    power: 1900,
    average_daily_hour: 8.0,
  },
  {
    name: "Aire Acondicionado",
    type: "Ventana Antiguo 1Ton - 12.000BTU",
    power: 3200,
    average_daily_hour: 8.0,
  },
  {
    name: "Aire Acondicionado",
    type: "Ventana Nuevo 1Ton - 12.000BTU",
    power: 2500,
    average_daily_hour: 8.0,
  },
  {
    name: "Aire Acondicionado",
    type: " Minisplit 1Ton - 12.000BTU",
    power: 1200,
    average_daily_hour: 8.0,
  },
  {
    name: "Aire Acondicionado",
    type: "Minisplit 1.5Ton - 18.000BTU",
    power: 1800,
    average_daily_hour: 8.0,
  },
  {
    name: "Aire Acondicionado",
    type: "Minisplit 2Ton - 24.000BTU",
    power: 2300,
    average_daily_hour: 8.0,
  },
  {
    name: "Televisor",
    type: 'LED de 24"',
    power: 50,
    average_daily_hour: 15.0,
  },
  {
    name: "Televisor",
    type: 'LED de 32"',
    power: 60,
    average_daily_hour: 15.0,
  },
  {
    name: "Televisor",
    type: 'LED de 40"',
    power: 70,
    average_daily_hour: 15.0,
  },
  {
    name: "Televisor",
    type: 'LED de 50"',
    power: 130,
    average_daily_hour: 15.0,
  },
  {
    name: "Televisor",
    type: 'LED de 65"',
    power: 150,
    average_daily_hour: 15.0,
  },
  {
    name: "Televisor",
    type: 'LED de 75"',
    power: 200,
    average_daily_hour: 15.0,
  },
  {
    name: "Televisor",
    type: 'LCD de 24"',
    power: 120,
    average_daily_hour: 15.0,
  },
  {
    name: "Televisor",
    type: 'LCD de 24"',
    power: 140,
    average_daily_hour: 15.0,
  },
  {
    name: "Televisor",
    type: 'LCD de 24"',
    power: 250,
    average_daily_hour: 15.0,
  },
  {
    name: "Televisor",
    type: 'LCD de 24"',
    power: 280,
    average_daily_hour: 15.0,
  },
  {
    name: "Televisor",
    type: 'LCD de 24"',
    power: 300,
    average_daily_hour: 15.0,
  },
  {
    name: "Luminaria",
    type: "Incandescente 40W",
    power: 40,
    average_daily_hour: 8.0,
  },
  {
    name: "Luminaria",
    type: "Incandescente 60W",
    power: 60,
    average_daily_hour: 8.0,
  },
  {
    name: "Luminaria",
    type: "Incandescente 100W",
    power: 100,
    average_daily_hour: 8.0,
  },
  {
    name: "Luminaria",
    type: "Incandescente 150W",
    power: 150,
    average_daily_hour: 8.0,
  },
  {
    name: "Luminaria",
    type: "Halogeno 40W",
    power: 40,
    average_daily_hour: 8.0,
  },
  {
    name: "Luminaria",
    type: "Halogeno 60W",
    power: 60,
    average_daily_hour: 8.0,
  },
  {
    name: "Luminaria",
    type: "Halogeno 100W",
    power: 100,
    average_daily_hour: 8.0,
  },
  {
    name: "Luminaria",
    type: "Halogeno 150W",
    power: 150,
    average_daily_hour: 8.0,
  },
  { name: "Luminaria", type: "Led 40W", power: 5, average_daily_hour: 8.0 },
  { name: "Luminaria", type: "Led 60W", power: 8, average_daily_hour: 8.0 },
  { name: "Luminaria", type: "Led 75W", power: 9, average_daily_hour: 8.0 },
];

export const getCategories: GetCategories = () =>
  Array.from(
    equips.reduce((prev, curr) => {
      return prev.add(curr.name);
    }, new Set<string>())
  );

export const getItemByCategory: GetItemByCategory = (category) =>
  equips.filter((item) => category === item.name);

export const getItemByKindAndCategory: GetItemByKindAndCategory = (
  category,
  kind
) => {
  const el = equips.find(
    (item) => item.name === category && item.type === kind
  );
  const baseEl = {
    power: el?.power ?? 0,
    hours: el?.average_daily_hour ?? 0,
    label: el?.average_daily_hour
      ? `${el.average_daily_hour} horas (Recomendado)`
      : "",
  };
  return [baseEl];
};

//[ 0.5, 1, 2, 3, 4, 5, 6, 8, 15,24 ];
