import type { FC } from "react";

import type { Selectable } from "../../domain";

interface ItemsInput extends Selectable {}

export type ItemsProps = FC<ItemsInput>;
