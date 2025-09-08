import type { NextProps } from "../../models";

import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import { arrow, Color } from "../../values";
import { SvgXml } from "react-native-svg";

const Next: NextProps = ({ isDisabled, handlePress }) => {
  const iconFab = isDisabled ? styles.fabDisabled : styles.fabAbled;
  const iconColor = isDisabled ? "white" : Color.card.text;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={iconFab} onPress={handlePress}>
        <SvgXml xml={arrow} width={36} height={36} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  fabDisabled: {
    width: 64,
    height: 64,
    right: 20,
    bottom: 40,
    borderRadius: 36,
    elevation: 16, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: "absolute",
    alignItems: "center",
    backgroundColor: "gray",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
  },
  fabAbled: {
    width: 64,
    height: 64,
    right: 20,
    bottom: 40,
    borderRadius: 36,
    elevation: 16, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: "absolute",
    alignItems: "center",
    color: Color.card.text,
    justifyContent: "center",
    backgroundColor: Color.card.success,
    shadowOffset: { width: 0, height: 2 },
  },
});

export { Next };
