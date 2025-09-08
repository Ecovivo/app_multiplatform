import type { IntroProps } from "../models";

import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import { ScrollView, StyleSheet, TextInput, View, Button } from "react-native";

import { Color } from "../values";
import { cloud, cloudRaining, logo, trees } from "../values";

const Intro: IntroProps = ({
  projects,
  projectName,
  onChangeProjectName,
  handleCreate,
  handleView,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const handleFocused = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const hasProjectName = projectName === "";
  const hasProjects = projects?.length === 0;
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      {!isFocused && (
        <>
          <View style={styles.leftCloudContainer}>
            <SvgXml xml={cloud} width={90} height={72} />
          </View>
          <View style={styles.rightCloudContainer}>
            <SvgXml xml={cloudRaining} width={80} height={94} />
          </View>
          <View style={styles.treeContainer}>
            <SvgXml xml={trees} width={277} height={121} />
          </View>
        </>
      )}
      <View style={styles.logoSection}>
        <SvgXml xml={logo} width={155} height={140} />
      </View>
      <View style={styles.formSection}>
        <TextInput
          value={projectName}
          onBlur={handleBlur}
          style={styles.input}
          onFocus={handleFocused}
          placeholder="Project name"
          placeholderTextColor="#888"
          onChangeText={onChangeProjectName}
        />
        <View style={styles.btnSuccess}>
          <Button
            onPress={handleCreate}
            title="Crear Proyectos"
            color={Color.card.success}
            disabled={hasProjectName}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.btnPrimary}>
          <Button
            onPress={handleView}
            title="Lista proyectos"
            disabled={hasProjects}
            color={Color.card.primary}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  leftCloudContainer: {
    left: 20,
    top: 120,
    zIndex: 1,
    position: "absolute",
  },
  rightCloudContainer: {
    top: 60,
    zIndex: 1,
    right: 20,
    position: "absolute",
  },
  treeContainer: {
    left: 15,
    zIndex: 1,
    bottom: 236,
    position: "absolute",
  },
  logoSection: {
    alignItems: "center",
    marginTop: 130,
    marginBottom: 20,
  },
  formSection: {
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    paddingTop: 30,
    paddingBottom: 60,
    position: "absolute",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: Color.card.bg,
  },
  input: {
    fontSize: 16,
    borderRadius: 4,
    marginBottom: 15,
    paddingVertical: 12,
    paddingHorizontal: 15,
    color: Color.light.text,
    backgroundColor: Color.light.bg,
  },
  btnSuccess: {
    marginBottom: 12,
  },
  btnPrimary: {},
  btnText: {
    fontSize: 16,
    fontWeight: "700",
    color: Color.light.bg,
    textAlign: "center",
  },
});

export { Intro };
