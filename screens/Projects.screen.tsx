import type { ProjectsProps } from "../models";

//import { useState } from "react";
import { SvgXml } from "react-native-svg";
import { Text, ScrollView, StyleSheet, View } from "react-native";

import { Items } from "../components";
import { Color, trees } from "../values";

const Projects: ProjectsProps = ({ projects, handlePress }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Seleccione un proyecto</Text>
      {projects.map((it) => (
        <Items
          id={it.id}
          key={it.uuid}
          name={it.name}
          uuid={it.type}
          handlePress={handlePress}
        />
      ))}
      <View style={styles.treeContainer}>
        <SvgXml xml={trees} width={277} height={121} />
      </View>
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

export { Projects };
