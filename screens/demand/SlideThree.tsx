import { FC } from "react";
import { Text, StyleSheet } from "react-native";

import { Color } from "../../values";

const SlideThree: FC = () => {
  return <Text style={styles.content}>Content for Tab 1 sfgsdfgs</Text>;
};

const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: "100%",
  },
});

export { SlideThree };
