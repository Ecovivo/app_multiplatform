import type { FloatingButtonProps } from "../../models";

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { add, Color } from "../../values";
import { SvgXml } from "react-native-svg";

const Floating: FloatingButtonProps = ({ projectType }) => {
  const iconFab =
    projectType === "demand"
      ? styles.fabDemand
      : projectType === "adapted"
      ? styles.fabAdapted
      : projectType === "area"
      ? styles.fabArea
      : styles.fabBudget;
  return (
    <View style={styles.container}>
      {/* Your main screen content goes here */}
      <Text>This is some content on the screen.</Text>

      <TouchableOpacity
        style={iconFab}
        onPress={() => alert("Floating button pressed!")}
      >
        <SvgXml xml={add} width={32} height={32} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fabDemand: {
    width: 64,
    height: 64,
    right: 20,
    bottom: 20,
    borderRadius: 30,
    elevation: 8, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.dark.danger,
  },
  fabAdapted: {
    width: 64,
    height: 64,
    right: 20,
    bottom: 20,
    borderRadius: 30,
    elevation: 8, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.dark.warning,
  },
  fabArea: {
    width: 64,
    height: 64,
    right: 20,
    bottom: 20,
    borderRadius: 30,
    elevation: 8, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.dark.primary,
  },
  fabBudget: {
    width: 64,
    height: 64,
    right: 20,
    bottom: 20,
    borderRadius: 30,
    elevation: 8, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.dark.success,
  },
  fabText: {
    fontSize: 24,
    color: "white",
  },
});

export { Floating };
