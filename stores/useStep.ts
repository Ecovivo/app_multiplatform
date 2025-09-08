import { create } from "zustand";
import { ProjectType } from "../models";
import { DemandForm } from "./useDemand";

interface StepForm {
  type: ProjectType;
  items: DemandForm[];
  dischargeDepth: number;
  autonomyDays: number;
  plantFactor: number;
}

interface UseStep extends StepForm {
  setDemandItems: (type: ProjectType, items: DemandForm[]) => void;
  setAdaptedItems: (type: ProjectType, items: DemandForm[]) => void;
  setAreaItems: (type: ProjectType, items: DemandForm[]) => void;
  setBudgetItems: (type: ProjectType, items: DemandForm[]) => void;
  setDischargeDepth: (dischargeDepth: number) => void;
  setAutonomyDays: (autonomyDays: number) => void;
  setPlantFactor: (plantFactor: number) => void;
}

const initialStore = {
  items: [] as DemandForm[],
  type: "demand" as ProjectType,
  dischargeDepth: 0,
  autonomyDays: 0,
  plantFactor: 0,
};

const useStep = create<UseStep>((set) => ({
  ...initialStore,
  setDemandItems: (type, items) => set({ type, items, plantFactor: 0.25 }),
  setAdaptedItems: (type, items) => set({ type, items }),
  setAreaItems: (type, items) => set({ type, items, dischargeDepth: 0.8 }),
  setBudgetItems: (type, items) => set({ type, items, autonomyDays: 1 }),
  setDischargeDepth: (dischargeDepth) => set({ dischargeDepth }),
  setAutonomyDays: (autonomyDays) => set({ autonomyDays }),
  setPlantFactor: (plantFactor) => set({ plantFactor }),
}));

export { useStep };
