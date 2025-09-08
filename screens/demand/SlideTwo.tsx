import type { ComponentProps, Equip } from "../../models";

import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { Next } from "../../components";
import { useDemand } from "../../stores";
import { getItemByCategory } from "../../values";
import { Radio } from "../../components/buttons/Radio";

const SlideTwo: ComponentProps = ({ handlePress }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const { category, kind, setKind } = useDemand();
  const kinds = getItemByCategory(category);

  return (
    <View style={styles.content}>
      <ScrollView>
        {kinds.map((item: Equip) => {
          const onSelect = (item: string) => () => {
            setKind(item);
            setIsDisabled(false);
          };
          return (
            <Radio
              label={item.type}
              selected={kind === item.type}
              onSelect={onSelect(item.type)}
              key={item.type}
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

export { SlideTwo };
