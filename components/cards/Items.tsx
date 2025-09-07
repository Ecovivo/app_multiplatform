import type { ItemsProps } from "../../models";

import React from "react";
import { SvgXml } from "react-native-svg";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Color } from "../../values";

const Items: ItemsProps = ({ handleSelected, name, type, uuid }) => {
  const iconContainer =
    uuid === "demand"
      ? styles.iconContainerDemand
      : uuid === "adapted"
      ? styles.iconContainerAdapted
      : uuid === "area"
      ? styles.iconContainerArea
      : styles.iconContainerBudget;
  return (
    <View>
      <Pressable onPress={handleSelected(uuid)} style={styles.container}>
        <View style={iconContainer}>
          <SvgXml xml={icon} width={24} height={24} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{label}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.dark.text,
    borderRadius: 2,
    shadowColor: Color.dark.bg,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  iconContainerDemand: {
    width: 80,
    height: 80,
    marginRight: 16,
    alignItems: "center",
    borderStartEndRadius: 2,
    justifyContent: "center",
    borderStartStartRadius: 2,
    backgroundColor: Color.dark.danger,
  },
  iconContainerBudget: {
    width: 80,
    height: 80,
    marginRight: 16,
    alignItems: "center",
    borderStartEndRadius: 2,
    justifyContent: "center",
    borderStartStartRadius: 2,
    backgroundColor: Color.dark.success,
  },
  iconContainerAdapted: {
    width: 80,
    height: 80,
    marginRight: 16,
    alignItems: "center",
    borderStartEndRadius: 2,
    justifyContent: "center",
    borderStartStartRadius: 2,
    backgroundColor: Color.dark.warning,
  },
  iconContainerArea: {
    width: 80,
    height: 80,
    marginRight: 16,
    alignItems: "center",
    borderStartEndRadius: 2,
    justifyContent: "center",
    borderStartStartRadius: 2,
    backgroundColor: Color.dark.primary,
  },
  textContainer: {
    flex: 1,
    paddingVertical: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: Color.dark.bg,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 16,
    color: Color.dark.bg,
    fontWeight: "400",
  },
});
export { Items };
