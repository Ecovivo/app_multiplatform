import type { ItemsProps } from "../../models";

import React from "react";
import { SvgXml } from "react-native-svg";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Color, getIconByUUID } from "../../values";

const Items: ItemsProps = ({ handlePress, id, uuid, name }) => {
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
      <Pressable onPress={handlePress(uuid, id)} style={styles.container}>
        <View style={iconContainer}>
          <SvgXml xml={getIconByUUID(uuid)} width={24} height={24} />
          <Text style={styles.title}>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    borderRadius: 2,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    marginHorizontal: 24,
    alignItems: "center",
    flexDirection: "row",
    shadowColor: Color.dark.bg,
    backgroundColor: Color.dark.text,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // For Android shadow
  },
  iconContainerDemand: {
    height: 80,
    width: "100%",
    borderRadius: 2,
    marginRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.dark.danger,
  },
  iconContainerBudget: {
    height: 80,
    width: "100%",
    borderRadius: 2,
    marginRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.dark.success,
  },
  iconContainerAdapted: {
    height: 80,
    width: "100%",
    borderRadius: 2,
    marginRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.dark.warning,
  },
  iconContainerArea: {
    height: 80,
    width: "100%",
    borderRadius: 2,
    marginRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.dark.primary,
  },
  textContainer: {
    flex: 1,
    paddingVertical: 12,
  },
  title: {
    fontSize: 18,
    width: "80%",
    marginLeft: 8,
    fontWeight: "700",
    color: Color.dark.bg,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: Color.dark.bg,
  },
});
export { Items };
