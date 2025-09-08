import type { ComponentProps, HourEquip } from "../../models";

import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { Next } from "../../components";
import { useDemand } from "../../stores";
import { getItemByKindAndCategory } from "../../values";
import { Radio } from "../../components/buttons/Radio";

const SlideThree: ComponentProps = ({ handlePress }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const { category, kind, hour, setHour } = useDemand();
  const hours = getItemByKindAndCategory(category, kind);

  return (
    <View style={styles.content}>
      <ScrollView>
        {hours.map((item: HourEquip) => {
          const onSelect = (hour: number, power: number) => () => {
            setHour(hour, power);
            setIsDisabled(false);
          };
          return (
            <Radio
              label={item.label}
              selected={hour === item.hours}
              onSelect={onSelect(item.hours, item.power)}
              key={item.hours}
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

export { SlideThree };
