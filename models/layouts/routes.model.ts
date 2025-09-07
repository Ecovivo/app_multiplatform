const MyScreens = [
  "intro",
  "selected",
  "projects",
  "demand",
  "adapted",
  "area",
  "budget",
] as const;
export type MyScreen = (typeof MyScreens)[number];
