import type { DeamandProps } from "../models";

import { useState } from "react";
import { SvgXml } from "react-native-svg";
import { Text, ScrollView, StyleSheet, View } from "react-native";

import { add, Color, cardMapper } from "../values";
import { cloud, cloudRaining, logo, trees } from "../values";
import { Resources, FloatingButton, Tabs } from "../components";

const Slide1 = () => (
  <Text style={styles.content}>Content for Tab 1 sfgsdfgs</Text>
);
const Slide2 = () => (
  <Text style={styles.content}>Content for Tab 2sdfgsdf sdfgsdfs</Text>
);
const Slide3 = () => (
  <Text style={styles.content}>Content for Tab 3sgfdsdfxdfgsdfggsdfg</Text>
);

const icons = [add, add, add, add];
const tabs = ["Tab1", "Tab2", "Tab3"];
const components = [Slide1, Slide2, Slide3];
const labels = ["Categoria de equipo", "Tipo de equipos", "Uso de equipo"];

const Demand: DeamandProps = ({ projectType }) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      {!showForm && (
        <>
          <Text style={styles.title}>Agregar demanda energetica</Text>
          <Resources {...cardMapper[projectType]} />
          <FloatingButton {...{ projectType }} />
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
            <Tabs {...{ labels, components, tabs, icons }} />
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
