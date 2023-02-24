import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ datas, currItem, onView }) => {
  const { image, title, site } = currItem;

  return (
    <div className="project_wrap">
      <div className="project_inner">
        {datas.map((item) => (
          <ProjectItem key={item.id} item={item} onView={onView} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
