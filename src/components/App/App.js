import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from "../Login";
import ProjectsBoard from "../ProjectsBoard";
import Workspace from "../Workspace";
import {
  logIn,
  savePicture,
  createProject,
  setToolbarSize,
  setActiveProject,
} from "../../redux/actions/actions";
import * as ROUTES from "../../constants/routes";

const App = ({ actions }) => {
  return (
    <Router>
      <Route
        exact
        path={ROUTES.LOG_IN}
        render={() => <Login logIn={actions.logIn} />}
      />
      <Route
        path={ROUTES.PROJECTS_BOARD}
        render={() => (
          <ProjectsBoard
            createProject={actions.createProject}
            setActiveProject={actions.setActiveProject}
          />
        )}
      />
      <Route
        path={ROUTES.WORKSPACE}
        render={() => (
          <Workspace
            savePicture={actions.savePicture}
            setToolbarSize={actions.setToolbarSize}
          />
        )}
      />
    </Router>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    logIn: (user) => dispatch(logIn(user)),
    setToolbarSize: (size) => dispatch(setToolbarSize(size)),
    savePicture: (picture) => dispatch(savePicture(picture)),
    createProject: (project) => dispatch(createProject(project)),
    setActiveProject: (project) => dispatch(setActiveProject(project)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
