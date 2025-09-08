import { FC } from "react";

import { SvgXml } from "react-native-svg";
import { View, TouchableOpacity, Linking } from "react-native";
import { Text, ScrollView, StyleSheet } from "react-native";

import { Color, trees, result } from "../values";

const { components, chips } = result;
const Result: FC = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.treeUpContainer}>
        <SvgXml xml={trees} width={277} height={121} />
      </View>
      <View style={styles.formSection}>
        <View style={styles.chips}>
          {chips.map((el) => (
            <View style={styles.xob} key={`el${el[0].label}`}>
              {el.map((item) => (
                <View style={styles.box} key={item.title}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.label}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
        <View style={styles.frame}>
          <Text style={styles.frameText}>Componentes requeridos</Text>
        </View>
        <View>
          {components.map((item) => {
            const handlePress = async () => {
              try {
                await Linking.openURL(item.url);
              } catch (error) {
                console.error("Failed to open URL:", error);
              }
            };
            return (
              <View key={item.url} style={styles.table}>
                <View style={styles.tableUnit}>
                  <Text style={styles.text}>{item.units}</Text>
                </View>
                <TouchableOpacity
                  style={styles.tableName}
                  onPress={handlePress}
                >
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  frame: {
    width: "100%",
    height: 50,
  },
  frameText: {
    fontSize: 20,
    marginTop: 16,
    marginHorizontal: 20,
    color: Color.card.text,
  },
  chips: {
    flexDirection: "row",
  },
  box: {
    flexDirection: "column",
  },
  xob: {
    flexDirection: "column",
    width: "50%",
    height: "40%",
    marginLeft: 20,
  },
  title: {
    width: "100%",
    marginTop: 24,
    fontSize: 28,
    color: Color.card.text,
  },
  subtitle: {
    width: "100%",
    marginTop: 4,
    fontSize: 14,
    color: Color.card.text,
  },
  treeContainer: {
    left: 15,
    zIndex: 1,
    bottom: 0,
    width: "100%",
    flexDirection: "row",
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
    paddingTop: 12,
    paddingBottom: 10,
    position: "absolute",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: Color.card.bg,
  },
  table: {
    width: "100%",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  tableUnit: {
    width: "10%",
  },
  text: {
    marginVertical: 4,
    width: "100%",
    fontSize: 20,
    color: Color.card.text,
  },
  tableName: {
    width: "90%",
  },
  buttons: {
    width: 80,
    height: 160,
    marginLeft: 40,
  },
  content: {
    width: "100%",
    height: "100%",
  },
});

export { Result };
