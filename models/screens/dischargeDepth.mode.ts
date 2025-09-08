import type { FC } from "react";
import type { HandleVoid } from "../utils";

export interface DischargeDepthInput {
  handlePress: (value: number) => HandleVoid;
}

export type DischargeDepthProps = FC<DischargeDepthInput>;
