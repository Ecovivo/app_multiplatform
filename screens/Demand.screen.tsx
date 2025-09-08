import type { DeamandProps } from "../models";

import { useState } from "react";
import { SvgXml } from "react-native-svg";
import { Text, ScrollView, StyleSheet, View } from "react-native";

import { Color, cardMapper, trees } from "../values";
import { Resources, Floating, Tabs } from "../components";
import { icons, tabs, components, labels, projectType } from "./demand";

const Demand: DeamandProps = ({ id }) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const handleFormOpen = () => setShowForm(true);
  const handleFormClose = () => setShowForm(false);
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      {!showForm && (
        <>
          <Text style={styles.title}>Agregar demanda energetica</Text>
          <Resources {...cardMapper[projectType]} />
          <Floating projectType={projectType} handlePress={handleFormOpen} />
          <View style={styles.treeContainer}>
            <SvgXml xml={trees} width={277} height={121} />
          </View>
        </>
      )}
      {showForm && (
        <>
          <View style={styles.treeUpContainer}>
            <SvgXml xml={trees} width={277} height={121} />
          </View>
          <View style={styles.formSection}>
            <Tabs
              tabs={tabs}
              icons={icons}
              labels={labels}
              components={components}
              handlePress={handleFormClose}
            />
          </View>
        </>
      )}
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
  treeContainer: {
    left: 15,
    zIndex: 1,
    bottom: 0,
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
  content: {
    width: "100%",
    height: "100%",
  },
});

export { Demand };
