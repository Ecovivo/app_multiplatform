import type { FC } from "react";

import type { ProjectType, SelectType } from "../../domain";

interface ItemsInput {
  id: number;
  name: string;
  uuid: SelectType;
  handlePress: (value: ProjectType, id: number) => () => void;
}

export type ItemsProps = FC<ItemsInput>;
