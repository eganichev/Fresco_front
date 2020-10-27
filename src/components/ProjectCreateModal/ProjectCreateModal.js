import React, { useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const ProjectCreateModal = ({
  users,
  closeModal,
  modalIsOpen,
  createProject,
}) => {
  const [formValues, setFormValues] = useState({
    projectName: "",
    projectDescription: "",
  });

  const handleChange = (prop) => ({ target }) => {
    setFormValues({
      ...formValues,
      [prop]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProject = {
      projectDescription: formValues.projectDescription,
      projectName: formValues.projectName,
      userId: users.currentUser.userId,
      projectId: uuidv4(),
    };

    createProject(newProject);
    closeModal();
    setFormValues({
      projectName: "",
      projectDescription: "",
    });
  };

  const onModalContentClick = (event) => event.stopPropagation();

  return (
    <>
      {modalIsOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal__content" onClick={onModalContentClick}>
            <FontAwesomeIcon
              icon={faTimes}
              size="lg"
              className="modal__icon"
              onClick={closeModal}
            />
            <h3 className="modal__title">Create a new project</h3>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__controll">
                <input
                  type="text"
                  className="form__item"
                  placeholder="Name project"
                  value={formValues.projectName}
                  onChange={handleChange("projectName")}
                />
              </div>
              <div className="form__controll">
                <textarea
                  className="form__item  form__item--textarea"
                  placeholder="Description project"
                  value={formValues.projectDescription}
                  onChange={handleChange("projectDescription")}
                />
              </div>
              <button className="btn" type="submit">
                Create project
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(ProjectCreateModal);
