import type { FC } from "react";

import type { Selectable } from "../../domain";

interface ResourcesInput extends Selectable {}

export type ResourcesProps = FC<ResourcesInput>;
