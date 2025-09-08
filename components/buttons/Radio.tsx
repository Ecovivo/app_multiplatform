import type { RadioProps } from "../../models";

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Radio: RadioProps = ({ label, selected, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.radioContainer}>
      <View
        style={[styles.radioCircle, selected && styles.selectedRadioCircle]}
      >
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.radioLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRadioCircle: {
    borderColor: "blue", // Example for selected state
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "blue", // Example for selected state
  },
  radioLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export { Radio };
