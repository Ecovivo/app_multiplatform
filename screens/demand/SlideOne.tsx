import type { ComponentProps } from "../../models";

import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import { Color, getCategories } from "../../values";
import { Next } from "../../components";
import { Radio } from "../../components/buttons/Radio";

const SlideOne: ComponentProps = ({ handlePress }) => {
  const [selected, useSelected] = useState<string>("");
  const categories = getCategories();
  const onSelect = (text: string) => () => useSelected(text);
  return (
    <View style={styles.content}>
      {categories.map((text: string) => (
        <Radio
          label={text}
          selected={selected}
          onSelect={onSelect}
          key={text}
        />
      ))}
      <Next isDisabled={true} handlePress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: "100%",
  },
  items: {
    color: Color.card.text,
  },
});

export { SlideOne };
