import { FC } from "react";
import type { ProjectDTO, MyScreen, ProjectType, ProjectDAO } from "../models";

import React, { useState, useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";

import { Intro, Selected, Demand, Projects } from "../screens";
import { getProjectMapper } from "../utils";

const Layout: FC = () => {
  const db = useSQLiteContext();
  const [version, setVersion] = useState<string>("");
  const [screen, setScreen] = useState<MyScreen>("intro");
  const [projects, setProjects] = useState<ProjectDAO[]>([]);
  const [projectName, onChangeProjectName] = useState<string>("");
  const [projectType, setProjectType] = useState<ProjectType | null>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    async function setup() {
      const result = await db.getAllAsync<ProjectDTO>("SELECT * FROM projects");
      setProjects(getProjectMapper(result));
    }
    setup();
  }, []);

  const handleFocused = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleCreate = () => {
    setScreen("selected");
  };
  const handleView = () => {
    setScreen("projects");
  };

  const handleSelected = (value: ProjectType) => () => {
    setProjectType(value);
    setScreen(value);
  };
  console.log(projects);

  const isIntro = screen === "intro";
  const isProjects = screen === "projects";
  const isSelected = screen === "selected";
  const isDemand = screen === "demand";
  const isAdapted = screen === "adapted";
  const isArea = screen === "area";
  const isBudget = screen === "budget";
  const hasProjects = projects.length === 0;
  const hasProjectName = projectName === "";
  if (isIntro) {
    return (
      <Intro
        {...{
          isFocused,
          projectName,
          handleBlur,
          handleFocused,
          onChangeProjectName,
          handleCreate,
          handleView,
          hasProjectName,
          hasProjects,
        }}
      />
    );
  }
  if (isSelected) {
    return <Selected {...{ handleSelected }} />;
  }
  if (isProjects) {
    return <Projects projects={projects} />;
  }
  if (isDemand && projectType) {
    return <Demand {...{ projectType }} />;
  }
  return null;
};

export { Layout };
