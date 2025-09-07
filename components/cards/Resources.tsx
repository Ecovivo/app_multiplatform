import type { ResourcesProps } from "../../models";

import React from "react";
import { SvgXml } from "react-native-svg";
import { View, Text, StyleSheet } from "react-native";

import { Color, getIconByUUID, getTitleByUUID } from "../../values";

const Resources: ResourcesProps = ({ description, uuid }) => {
  const iconContainer =
    uuid === "demand"
      ? styles.iconContainerDemand
      : uuid === "adapted"
      ? styles.iconContainerAdapted
      : uuid === "area"
      ? styles.iconContainerArea
      : styles.iconContainerBudget;
  return (
    <View style={styles.container}>
      <View style={iconContainer}>
        <SvgXml xml={getIconByUUID(uuid)} width={24} height={24} />
        <Text style={styles.title}>{getTitleByUUID(uuid)}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.subtitle}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    marginVertical: 12,
    marginHorizontal: 24,
    shadowColor: Color.dark.bg,
    backgroundColor: Color.dark.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  iconContainerBudget: {
    alignItems: "center",
    flexDirection: "row",
    borderEndStartRadius: 2,
    justifyContent: "center",
    borderStartStartRadius: 2,
    backgroundColor: Color.dark.success,
  },
  iconContainerArea: {
    flexDirection: "row",
    alignItems: "center",
    borderEndStartRadius: 2,
    justifyContent: "center",
    borderStartStartRadius: 2,
    backgroundColor: Color.dark.primary,
  },
  iconContainerAdapted: {
    flexDirection: "row",
    alignItems: "center",
    borderEndStartRadius: 2,
    justifyContent: "center",
    borderStartStartRadius: 2,
    backgroundColor: Color.dark.warning,
  },
  iconContainerDemand: {
    paddingVertical: 8,
    alignItems: "center",
    flexDirection: "row",
    borderEndStartRadius: 2,
    justifyContent: "center",
    borderStartStartRadius: 2,
    backgroundColor: Color.dark.danger,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: Color.dark.bg,
  },
  card: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    fontWeight: "400",
    lineHeight: 20,
  },
});

export { Resources };
