import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import { withResizeDetector } from "react-resize-detector";

const Toolbar = ({
  width,
  height,
  toolsList,
  saveLayer,
  currentTool,
  setToolbarSize,
  switchBrushTool,
  switchAddNoteTool,
  switchCursorTool,
}) => {
  useEffect(() => {
    setToolbarSize({ width, height });
  }, [width, height]); //eslint-disable-line

  return (
    <div className="toolbar">
      <button
        className={
          currentTool === toolsList.cursor
            ? "toolbar__btn selected"
            : "toolbar__btn"
        }
        onClick={switchCursorTool}
      >
        <FontAwesomeIcon
          icon={faMousePointer}
          className="toolbar__icon"
          size="lg"
        />
      </button>
      <button
        className={
          currentTool === toolsList.note
            ? "toolbar__btn selected"
            : "toolbar__btn"
        }
        onClick={switchAddNoteTool}
      >
        <FontAwesomeIcon
          icon={faStickyNote}
          className="toolbar__icon"
          size="lg"
        />
      </button>
      <button
        className={
          currentTool === toolsList.brush
            ? "toolbar__btn selected"
            : "toolbar__btn"
        }
        onClick={switchBrushTool}
      >
        <FontAwesomeIcon
          icon={faPaintBrush}
          className="toolbar__icon"
          size="lg"
        />
      </button>
      <button className="toolbar__btn" onClick={saveLayer}>
        <FontAwesomeIcon icon={faSave} className="toolbar__icon" size="lg" />
      </button>
    </div>
  );
};

export default withResizeDetector(Toolbar);
