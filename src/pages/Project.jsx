import React, { useState } from "react";
import ProjectList from "./ProjectList";
import ProjectView from "./ProjectView";
import data from "../db/image";
import "./css/Project.css";

const Project = () => {
  const [datas] = useState(data);
  const [currItem, setCurrItem] = useState(datas[0]);

  const onView = (id) => {
    setCurrItem(datas.find((item) => item.id === id));
  };
  return (
    <div className="">
      <ProjectList datas={datas} onView={onView} currItem={currItem} />
      <ProjectView currItem={currItem} />
    </div>
  );
};

export default Project;
