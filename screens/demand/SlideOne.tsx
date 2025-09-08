import type { ComponentProps } from "../../models";

import { Text, View, StyleSheet } from "react-native";

import { Color, getCategories } from "../../values";
import { Next } from "../../components";

const SlideOne: ComponentProps = ({ handlePress }) => {
  return (
    <View>
      {getCategories() && (
        <Text style={styles.content}>Content for Tab 1 sfgsdfgs</Text>
      )}
      <Next isDisabled={true} handlePress={handlePress} />
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
