import type { DischargeDepthProps } from "../models";

import { useState } from "react";
import { SvgXml } from "react-native-svg";
import { Text, ScrollView, StyleSheet, View } from "react-native";

import { useStep } from "../stores";

import { Color, trees, dischargeDepthValue, Options } from "../values";
import { Next, Radio } from "../components";

const { label, description, options } = dischargeDepthValue;
const DischargeDepth: DischargeDepthProps = ({ handlePress }) => {
  const [value, setValue] = useState<number>(0);

  const title = `Agregar ${label}`;
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.treeUpContainer}>
        <SvgXml xml={trees} width={277} height={121} />
      </View>
      <View style={styles.formSection}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{description}</Text>
        {options.map((item: Options) => {
          const onSelect = (value: number) => () => {
            setValue(value);
          };
          return (
            <Radio
              label={item.label}
              selected={value === item.value}
              onSelect={onSelect(item.value)}
              key={item.label}
            />
          );
        })}
        <Next isDisabled={Boolean(value)} handlePress={handlePress(value)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  title: {
    marginTop: 12,
    marginHorizontal: 12,
    fontSize: 18,
    color: Color.card.text,
  },
  subtitle: {
    marginTop: 6,
    marginHorizontal: 12,
    fontSize: 14,
    marginBottom: 24,
    color: Color.card.text,
  },
  treeContainer: {
    left: 15,
    zIndex: 1,
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    position: "absolute",
  },
  treeUpContainer: {
    left: 15,
    zIndex: 1,
    bottom: "80%",
    position: "absolute",
  },
  formSection: {
    height: "80%",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    paddingTop: 12,
    paddingBottom: 10,
    position: "absolute",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: Color.card.bg,
  },
  buttons: {
    width: 80,
    height: 160,
    marginLeft: 40,
  },
  content: {
    width: "100%",
    height: "100%",
  },
});

export { DischargeDepth };
