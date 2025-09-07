import type { FC } from "react";

interface TabsInput {
  tabs: string[];
  icons: string[];
  labels: string[];
  components: FC[];
}

export type TabsProps = FC<TabsInput>;
