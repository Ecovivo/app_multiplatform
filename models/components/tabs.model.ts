import type { FC } from "react";
import type { HandleVoid } from "../utils";

interface ComponentInput {
  handlePress: HandleVoid;
}

export type ComponentProps = FC<ComponentInput>;

interface TabsInput {
  tabs: string[];
  icons: string[];
  labels: string[];
  handlePress: HandleVoid;
  components: ComponentProps[];
}

export type TabsProps = FC<TabsInput>;
