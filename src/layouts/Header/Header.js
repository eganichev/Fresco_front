import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { withResizeDetector } from "react-resize-detector";
import { setHeaderSize } from "../../redux/actions/actions";

const Header = ({ users, width, height, actions }) => {
  const conditionDisplayUserProfile = Object.keys(users.currentUser).length > 0;

  useEffect(() => {
    actions.setHeaderSize({ width, height });
  }, [width, height]); //eslint-disable-line

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">Fresco</div>
          {conditionDisplayUserProfile && (
            <div className="header__profile">
              <div className="header__user">{users.currentUser.userName}</div>
              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                className="header__icon"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    setHeaderSize: (layout) => dispatch(setHeaderSize(layout)),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withResizeDetector(Header));
