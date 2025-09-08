import { create } from "zustand";

export interface DemandForm {
  category: string;
  kind: string;
  hour: number;
  power: number;
}

interface UseDemand extends DemandForm {
  setCategory: (category: string) => void;
  setKind: (kind: string) => void;
  setHour: (hour: number, power: number) => void;
  equips: DemandForm[];
  setEquips: () => void;
}

const initialStore = {
  category: "",
  kind: "",
  hour: 0,
  power: 0,
};

const useDemand = create<UseDemand>((set) => ({
  ...initialStore,
  equips: [],
  setCategory: (category) => set({ category }),
  setKind: (kind) => set({ kind }),
  setHour: (hour, power) => set({ hour, power }),
  setEquips: () =>
    set((state) => ({
      equips: [
        ...state.equips,
        {
          category: state.category,
          kind: state.kind,
          hour: state.hour,
          power: state.power,
        },
      ],
      ...initialStore,
    })),
}));

export { useDemand };
