import React from "react";
import { connect } from "react-redux";
import ProjectCard from "../ProjectCard";

const ProjectsList = ({ projects, setActiveProject }) => {
  return (
    <div className="projects__list">
      {projects.projectsList.map((project) => (
        <ProjectCard
          key={project.projectId}
          project={project}
          setActiveProject={setActiveProject}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(ProjectsList);
