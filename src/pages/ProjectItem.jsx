import React from "react";

const ProjectItem = ({ item, onView }) => {
  const { image, title, id } = item;

  return (
    <a onClick={() => onView(id)}>
      <img src={image} alt={title} />
    </a>
  );
};

export default ProjectItem;
