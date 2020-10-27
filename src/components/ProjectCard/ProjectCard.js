import React from "react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const ProjectCard = ({ project, setActiveProject }) => {
  const history = useHistory();

  const goToWorkspace = () => {
    setActiveProject(project);
    history.push(ROUTES.WORKSPACE);
  };

  return (
    <div className="card">
      <div className="card__header">
        <h3 className="card__title">{project.projectName}</h3>
      </div>
      <div className="card__content">
        <p className="card__description">{project.projectDescription}</p>
        <button className="btn  btn--card" onClick={goToWorkspace}>
          Open
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
