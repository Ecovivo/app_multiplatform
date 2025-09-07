import { Text, ScrollView, StyleSheet } from "react-native";
//import { useSQLiteContext } from "expo-sqlite";

import { SelectedProps } from "../models";
import { Color, cardMapper } from "../values";
import { Types } from "../components";

const Selected: SelectedProps = ({ handleSelected }) => {
  //const db = useSQLiteContext();
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Seleccione el tipo de proyecto</Text>
      {Object.values(cardMapper).map((it) => {
        const { uuid, description, label } = it;
        return (
          <Types key={uuid} {...{ uuid, label, description, handleSelected }} />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  title: {
    marginTop: 80,
    marginHorizontal: 24,
    fontSize: 24,
    marginBottom: 24,
    color: Color.dark.text,
  },
});

export { Selected };
