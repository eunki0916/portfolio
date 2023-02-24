import React from "react";

const ProjectView = ({ currItem }) => {
  const { title, desc, logo, site } = currItem;

  return (
    <div className="thum_wrap">
      <div className="thum">
        <img src={logo} alt={title} />
      </div>
      <div className="desc">
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href={site}>사이트로 이동</a>
      </div>
    </div>
  );
};

export default ProjectView;
