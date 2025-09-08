import type { RadioProps } from "../../models";

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { Color } from "../../values";

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
    marginVertical: 12,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Color.card.text,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRadioCircle: {
    borderColor: Color.card.success,
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: Color.card.success,
  },
  radioLabel: {
    marginLeft: 12,
    fontSize: 18,
  },
});

export { Radio };
