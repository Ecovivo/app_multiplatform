import type { NextProps } from "../../models";

import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import { arrow, Color } from "../../values";
import { SvgXml } from "react-native-svg";

const Next: NextProps = ({ isDisabled, handlePress }) => {
  const iconFab = isDisabled ? styles.fabDisabled : styles.fabAbled;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={iconFab} onPress={handlePress}>
        <SvgXml xml={arrow} width={36} height={36} />
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
  fabDisabled: {
    width: 64,
    height: 64,
    right: -100,
    bottom: 40,
    borderRadius: 30,
    elevation: 8, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    color: Color.dark.bg,
    backgroundColor: "gray",
    shadowOffset: { width: 0, height: 2 },
  },
  fabAbled: {
    width: 64,
    height: 64,
    right: -100,
    bottom: 40,
    borderRadius: 30,
    elevation: 8, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.card.success,
  },
  fabText: {
    fontSize: 24,
    color: "white",
  },
});

export { Next };
