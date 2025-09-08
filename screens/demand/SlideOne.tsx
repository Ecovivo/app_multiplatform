import type { ComponentProps } from "../../models";

import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { Next } from "../../components";
import { useDemand } from "../../stores";
import { getCategories } from "../../values";
import { Radio } from "../../components/buttons/Radio";

const SlideOne: ComponentProps = ({ handlePress }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const { category, setCategory } = useDemand();
  const categories = getCategories();

  return (
    <View style={styles.content}>
      <ScrollView>
        {categories.map((item: string) => {
          const onSelect = (item: string) => () => {
            setCategory(item);
            setIsDisabled(false);
          };
          return (
            <Radio
              label={item}
              selected={category === item}
              onSelect={onSelect(item)}
              key={item}
            />
          );
        })}
      </ScrollView>
      <Next isDisabled={isDisabled} handlePress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: "100%",
  },
});

export { SlideOne };
