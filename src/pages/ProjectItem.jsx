import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ item, onView }) => {
  const { image, title, id } = item;

  return (
    <Link onClick={() => onView(id)}>
      <img src={image} alt={title} />
    </Link>
  );
};

export default ProjectItem;
