const MyScreens = [
  "intro",
  "selected",
  "projects",
  "demand",
  "adapted",
  "area",
  "budget",
  "dischargeDepth",
  "autonomyDays",
  "plantFactor",
  "result",
] as const;
export type MyScreen = (typeof MyScreens)[number];
