import type { DeamandProps } from "../models";

import { useState } from "react";
import { SvgXml } from "react-native-svg";
import { Text, ScrollView, StyleSheet, View } from "react-native";

import { useDemand } from "../stores";

import { Color, cardMapper, trees } from "../values";
import { Resources, Floating, Tabs, Next } from "../components";
import { icons, tabs, components, labels, projectType } from "./demand";
import { Details } from "../components/cards/Details";

const Demand: DeamandProps = ({ handlePress }) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const { equips } = useDemand();
  const handleFormOpen = () => setShowForm(true);
  const handleFormClose = () => setShowForm(false);
  const withoutEquips = equips.length === 0;

  const getEmpty = () => {
    return (
      <>
        <Text style={styles.title}>Agregar demanda energetica</Text>
        <Resources {...cardMapper[projectType]} />
        <Floating projectType={projectType} handlePress={handleFormOpen} />
        <View style={styles.treeContainer}>
          <SvgXml xml={trees} width={277} height={121} />
        </View>
      </>
    );
  };

  const getEquipCards = () => {
    const handleEquipPress = (type: string) => () => {
      console.log("TODO: update create", type);
    };
    return (
      <>
        <Text style={styles.title}>Agregar demanda energetica</Text>
        <ScrollView>
          {equips.map((equip) => (
            <Details
              key={`${equip.power}_${equip.hour}_${equip.category}`}
              uuid="demand"
              label={`Consumo ${equip.power} W cada ${equip.hour} horas`}
              description={equip.kind}
              title={equip.category}
              handlePress={handleEquipPress}
            />
          ))}
        </ScrollView>
        <View style={styles.treeContainer}>
          <SvgXml xml={trees} width={277} height={121} />
          <View style={styles.buttons}>
            <Next
              isDisabled={false}
              handlePress={handlePress(projectType, equips)}
            />
            <Floating projectType={projectType} handlePress={handleFormOpen} />
          </View>
        </View>
      </>
    );
  };

  const getCards = () => (withoutEquips ? getEmpty() : getEquipCards());

  const getForm = () => {
    return (
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
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      {!showForm && getCards()}
      {showForm && getForm()}
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
    padding: 20,
    paddingTop: 12,
    paddingBottom: 10,
    position: "absolute",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: Color.card.bg,
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

export { Demand };
