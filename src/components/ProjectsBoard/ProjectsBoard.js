import React, { useState } from "react";
import HeaderLayout from "../../layouts/HeaderLayout";
import ProjectCreateModal from "../ProjectCreateModal";
import ProjectsList from "../ProjectsList";

const ProjectsBoard = ({ createProject, setActiveProject }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <HeaderLayout>
        <div className="projects">
          <div className="container">
            <button className="btn" onClick={openModal}>
              Create new project
            </button>
            <ProjectCreateModal
              closeModal={closeModal}
              modalIsOpen={modalIsOpen}
              createProject={createProject}
            />
            <ProjectsList setActiveProject={setActiveProject} />
          </div>
        </div>
      </HeaderLayout>
    </>
  );
};

export default ProjectsBoard;
