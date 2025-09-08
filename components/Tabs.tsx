import type { TabsProps, ComponentProps } from "../models";

import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { useDemand } from "../stores";
import { Color } from "../values";

const Tabs: TabsProps = ({ labels, components, tabs, icons, handlePress }) => {
  const [activeLabel, setActiveLabel] = useState<(typeof labels)[number]>(
    labels[0]
  );
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number] | null>(
    tabs[0]
  );
  const [wasFocusTabs, setWasFocusTabs] = useState<(typeof tabs)[number][]>([
    tabs[0],
  ]);
  const { setEquips } = useDemand();

  // Safety checks for arrays
  if (
    !tabs?.length ||
    !labels?.length ||
    !icons?.length ||
    !components?.length
  ) {
    return null;
  }

  const getHandlePress = (tab: (typeof tabs)[number]) => () => {
    setWasFocusTabs((state) => (state.includes(tab) ? state : [...state, tab]));
    setActiveTab(tab);
    const index = tabs.findIndex((t) => t === tab);
    setActiveLabel(labels[index]);
  };

  const handleNextPress = () => {
    const index = tabs.findIndex((t) => t === activeTab);
    setActiveTab(
      index !== -1 && index + 1 < tabs.length ? tabs[index + 1] : null
    );
  };

  const getColorTab = (tab: (typeof tabs)[number]) =>
    activeTab === tab
      ? Color.card.success
      : wasFocusTabs.includes(tab)
      ? Color.card.primary
      : "gray";

  if (activeTab == null) {
    handlePress();
    setEquips();
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleTabs}>{activeLabel}</Text>
      <View style={styles.tabBar}>
        {tabs.map((it, i) => (
          <TouchableOpacity
            key={it}
            onPress={getHandlePress(it)}
            disabled={wasFocusTabs.includes(activeTab)}
            style={[
              styles.tabButton,
              activeTab === it && styles.activeTabButton,
            ]}
          >
            <SvgXml
              xml={icons[i]}
              width={24}
              height={24}
              color={getColorTab(it)}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.contentContainer}>
        {tabs.map((it, i) => {
          const Component = components[i] as ComponentProps;
          return (
            activeTab === it && (
              <Component key={it} handlePress={handleNextPress} />
            )
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleTabs: {
    fontSize: 16,
    fontWeight: 600,
    color: Color.card.text,
  },
  tabBar: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    justifyContent: "space-around",
  },
  tabButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: Color.card.success,
  },
  tabText: {
    fontSize: 16,
    color: "gray",
  },
  activeTabText: {
    fontWeight: "bold",
    color: Color.card.success,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { Tabs };
