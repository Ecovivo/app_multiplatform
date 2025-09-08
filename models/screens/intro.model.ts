import type { Dispatch, FC, SetStateAction } from "react";
import type { HandleVoid } from "../utils";
import { ProjectDAO } from "../domain";

export interface IntroInput {
  projectName: string;
  projects?: ProjectDAO[];
  onChangeProjectName: Dispatch<SetStateAction<string>>;
  handleCreate: HandleVoid;
  handleView: HandleVoid;
}

export type IntroProps = FC<IntroInput>;
