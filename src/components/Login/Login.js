import React from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { uniqueNamesGenerator, names } from "unique-names-generator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import HeaderLayout from "../../layouts/HeaderLayout";
import * as ROUTES from "../../constants/routes";

const Login = ({ logIn }) => {
  const history = useHistory();

  const configDictionaries = {
    dictionaries: [names],
  };

  const createUser = () => {
    const newUser = {
      userName: uniqueNamesGenerator(configDictionaries),
      userId: uuidv4(),
    };
    logIn(newUser);
    history.push(ROUTES.PROJECTS_BOARD);
  };

  return (
    <>
      <HeaderLayout>
        <div className="login">
          <div className="login__header">
            <h3 className="login__title">Log In</h3>
          </div>
          <div className="login__content">
            <h4 className="login__subtitle">Log in with your Google Account</h4>
            <button className="login__btn" onClick={createUser}>
              <span className="login__text">Log In</span>
              <FontAwesomeIcon
                icon={faGoogle}
                size="lg"
                className="login__icon"
              />
            </button>
            <p className="login__note">
              *Registration / Log In via Google Apps only. If you don’t have a
              Gmail / Google Apps Account - you can’t use Fresco.
            </p>
          </div>
        </div>
      </HeaderLayout>
    </>
  );
};

export default Login;
