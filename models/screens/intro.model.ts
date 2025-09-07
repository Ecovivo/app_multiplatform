import type { Dispatch, FC, SetStateAction } from "react";
import type { HandleVoid } from "../utils";

export interface IntroInput {
  isFocused: boolean;
  projectName: string;
  handleBlur: HandleVoid;
  handleFocused: HandleVoid;
  onChangeProjectName: Dispatch<SetStateAction<string>>;
  handleCreate: HandleVoid;
  handleView: HandleVoid;
  hasProjectName: boolean;
  hasProjects: boolean;
}

export type IntroProps = FC<IntroInput>;
