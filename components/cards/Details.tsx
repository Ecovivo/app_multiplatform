import type { DetailsProps } from "../../models";

import React from "react";
import { SvgXml } from "react-native-svg";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { Color, getDetailIconByUUID } from "../../values";

const Details: DetailsProps = ({
  handlePress,
  label,
  title,
  description,
  uuid,
}) => {
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
      <Pressable onPress={handlePress(uuid)} style={styles.container}>
        <View style={iconContainer}>
          <SvgXml
            xml={getDetailIconByUUID(uuid)}
            width={24}
            height={24}
            color={Color.card.bg}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{label}</Text>
          <Text style={styles.text}>{description}</Text>
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
    width: 100,
    height: 100,
    marginRight: 16,
    alignItems: "center",
    borderStartEndRadius: 2,
    justifyContent: "center",
    borderStartStartRadius: 2,
    backgroundColor: Color.card.danger,
  },
  iconContainerBudget: {
    width: 100,
    height: 100,
    marginRight: 16,
    alignItems: "center",
    borderStartEndRadius: 2,
    justifyContent: "center",
    borderStartStartRadius: 2,
    backgroundColor: Color.dark.success,
  },
  iconContainerAdapted: {
    width: 100,
    height: 100,
    marginRight: 16,
    alignItems: "center",
    borderStartEndRadius: 2,
    justifyContent: "center",
    borderStartStartRadius: 2,
    backgroundColor: Color.dark.warning,
  },
  iconContainerArea: {
    width: 100,
    height: 100,
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
    fontSize: 16,
    fontWeight: "700",
    color: Color.card.text,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: Color.card.text,
    fontWeight: "400",
  },
  text: {
    fontSize: 12,
    color: Color.card.text,
    fontWeight: "400",
  },
});

export { Details };
