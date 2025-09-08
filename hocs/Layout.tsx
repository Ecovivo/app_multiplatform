import { FC } from "react";
import type { ProjectDTO, MyScreen, ProjectType, ProjectDAO } from "../models";

import React, { useState, useEffect, useCallback } from "react";
import { useSQLiteContext } from "expo-sqlite";

import { Intro, Selected, Demand, Projects } from "../screens";
import { getProjectMapper, getTypeProject } from "../utils";

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

  const handleCreate = () => {
    setScreen("selected");
  };
  const handleView = () => {
    setScreen("projects");
  };

  const handleProjects = (type: ProjectType, id: number) => () => {
    setId(id);
    setScreen(type);
  };

  const handleSelected = (type: ProjectType) => async () => {
    const result = await db.runAsync(
      "INSERT INTO projects (name, type) VALUES (?, ?)",
      projectName,
      getTypeProject(type)
    );
    setId(result.lastInsertRowId);
    setScreen(type);
  };

  const isIntro = screen === "intro";
  const isProjects = screen === "projects";
  const isSelected = screen === "selected";
  const isDemand = screen === "demand";
  const isAdapted = screen === "adapted";
  const isArea = screen === "area";
  const isBudget = screen === "budget";

  if (isIntro) {
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
    return <Selected handlePress={handleSelected} />;
  }
  if (isProjects) {
    return <Projects projects={projects} handlePress={handleProjects} />;
  }
  if (isDemand && id) {
    return <Demand id={id} />;
  }
  return null;
};

export { Layout };
