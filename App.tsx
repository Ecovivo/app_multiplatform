import React from "react";

import { SQLiteProvider } from "expo-sqlite";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView, StyleSheet, Platform } from "react-native";

import { Color } from "./values";
import { Layout } from "./hocs";
import { migrateDbIfNeeded } from "./utils";

export default function App() {
  const theBehavior = Platform.OS === "ios" ? "padding" : "height";
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={theBehavior}
      >
        <SQLiteProvider databaseName="solar.db" onInit={migrateDbIfNeeded}>
          <Layout />
        </SQLiteProvider>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.dark.bg,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
// scrollContent borrar
