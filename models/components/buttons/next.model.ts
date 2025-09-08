import type { FC } from "react";
import type { HandleVoid } from "../../utils";

interface NextInput {
  handlePress: HandleVoid;
  isDisabled: boolean;
}

export type NextProps = FC<NextInput>;
