import type { FC } from "react";

import type { ProjectType, Selectable } from "../../domain";

interface TypeSInput extends Selectable {
  handlePress: (value: ProjectType) => () => void;
}

export type TypesProps = FC<TypeSInput>;
