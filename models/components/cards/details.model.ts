import type { FC } from "react";

import type { ProjectType, Selectable } from "../../domain";

interface DetailsInput extends Selectable {
  handlePress: (value: ProjectType) => () => void;
  title: string;
}

export type DetailsProps = FC<DetailsInput>;
