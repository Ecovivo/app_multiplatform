import { FC } from "react";
import type { ProjectDTO, MyScreen, ProjectType, ProjectDAO } from "../models";
import type { DemandForm } from "../stores";

import React, { useState, useEffect, useCallback } from "react";
import { useSQLiteContext } from "expo-sqlite";

import { useStep } from "../stores";
import { getProjectMapper, getTypeProject } from "../utils";
import { Intro, Selected, Demand, Projects, Result } from "../screens";
import { DischargeDepth, AutonomyDays, PlantFactor } from "../screens";

const Layout: FC = () => {
  const db = useSQLiteContext();
  const [projects, setProjects] = useState<ProjectDAO[]>([]);
  const setup = useCallback(async () => {
    const result = await db.getAllAsync<ProjectDTO>("SELECT * FROM projects");
    const projects = await getProjectMapper(result);
    await setProjects(projects);
  }, []);
  useEffect(() => {
    setup();
  }, []);
  return <Innert projects={projects} />;
};

interface InnertInput {
  projects: ProjectDAO[];
}
type InnertProps = FC<InnertInput>;

const Innert: InnertProps = ({ projects }) => {
  const db = useSQLiteContext();
  const [id, setId] = useState<number>();
  const [screen, setScreen] = useState<MyScreen>("intro");
  const [projectName, onChangeProjectName] = useState<string>("");
  const { setDemandItems, setDischargeDepth, setAutonomyDays } = useStep();

  const isIntro = screen === "intro";
  const isProjects = screen === "projects";
  const isSelected = screen === "selected";
  const isDemand = screen === "demand";
  const isAdapted = screen === "adapted";
  const isArea = screen === "area";
  const isBudget = screen === "budget";
  const isDischargeDepth = screen === "dischargeDepth";
  const isAutonomyDays = screen === "autonomyDays";
  const isPlantFactor = screen === "plantFactor";
  const isResult = screen === "result";

  if (isIntro) {
    const handleCreate = () => {
      setScreen("selected");
    };
    const handleView = () => {
      setScreen("projects");
    };

    return (
      <Intro
        projects={projects}
        handleView={handleView}
        projectName={projectName}
        handleCreate={handleCreate}
        onChangeProjectName={onChangeProjectName}
      />
    );
  }

  if (isSelected) {
    const handleSelected = (type: ProjectType) => async () => {
      const result = await db.runAsync(
        "INSERT INTO projects (name, type) VALUES (?, ?)",
        projectName,
        getTypeProject(type)
      );
      setId(result.lastInsertRowId);
      setScreen(type);
    };
    return <Selected handlePress={handleSelected} />;
  }

  if (isProjects) {
    const handleProjects = (type: ProjectType, id: number) => () => {
      setId(id);
      setScreen(type);
    };
    return <Projects projects={projects} handlePress={handleProjects} />;
  }

  if (isDemand) {
    const handleDemand = (type: ProjectType, items: DemandForm[]) => () => {
      setDemandItems(type, items);
      setScreen("dischargeDepth");
    };
    return <Demand handlePress={handleDemand} />;
  }

  if (isDischargeDepth) {
    const handleDischargeDepth = (value: number) => () => {
      setDischargeDepth(value);
      setScreen("autonomyDays");
    };
    return <DischargeDepth handlePress={handleDischargeDepth} />;
  }
  if (isAutonomyDays) {
    const handleAutonomyDays = (value: number) => () => {
      setAutonomyDays(value);
      setScreen("result");
    };
    return <AutonomyDays handlePress={handleAutonomyDays} />;
  }

  /*
  if (isPlantFactor) {
    const handlePlantFactor = () => {
      setScreen("dischargeDepth");
    };
    return <PlantFactor handlePress={handlePlantFactor} />;
  }
  */

  if (isResult) {
    return <Result />;
  }

  return null;
};

export { Layout };
