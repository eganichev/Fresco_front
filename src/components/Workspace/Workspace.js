import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useCanvasLayout } from "../../hooks/useCanvasLayout";
import { addLine } from "../../drawTools/line";
import Konva from "konva";
import HeaderLayout from "../../layouts/HeaderLayout";
import Toolbar from "../Toolbar";
import Graphics from "../Graphics";

const toolsList = {
  note: "note",
  brush: "brush",
  cursor: "cursor",
  default: "default",
};

const Workspace = ({
  users,
  projects,
  pictures,
  headerSize,
  toolbarSize,
  savePicture,
  setToolbarSize,
}) => {
  const stageRef = useRef(null);
  const gridLayerRef = useRef(null);
  const drawLayerRef = useRef(null);

  const [notes, setNotes] = useState([]);
  const [textNote, setTextNote] = useState("");
  const [draggedNoteId, setDraggedNoteId] = useState();
  const [startCoordsDraggedNote, setStartCoordsDraggedNote] = useState();
  const [currentTool, setCurrentTool] = useState(toolsList.default);
  const [currentLayer, setCurrentLayer] = useState({});

  const { sizeCanvas, placeholders } = useCanvasLayout(headerSize, toolbarSize);

  const switchAddNoteTool = () => setCurrentTool(toolsList.note);
  const switchBrushTool = () => setCurrentTool(toolsList.brush);
  const switchCursorTool = () => setCurrentTool(toolsList.cursor);

  const addNote = () => {
    if (currentTool === toolsList.cursor) {
      if (notes.length > 0 && textNote.length > 0) {
        setTextNote("");
      }
    }

    if (currentTool !== toolsList.note) return;
    const { x, y } = stageRef.current.getPointerPosition();
    const newNote = { id: uuidv4(), x, y, text: "" };
    const newNotes = [...notes];
    const lastNote = newNotes[newNotes.length - 1];

    if (newNotes.length === 0) {
      newNotes.push(newNote);
    } else if (newNotes.length > 0 && lastNote.text.length === 0) {
      newNotes.splice(newNotes.length - 1, 1, newNote);
    } else if (newNotes.length > 0 && textNote.length > 0) {
      newNotes.splice(newNotes.length - 1, 1, { ...lastNote, text: textNote });
      setCurrentTool(toolsList.cursor);
      setTextNote("");
    } else {
      newNotes.push(newNote);
    }

    setNotes(newNotes);
  };

  const dragStart = (event) => {
    setDraggedNoteId(event.target.id);
    setStartCoordsDraggedNote({
      x: event.nativeEvent.clientX,
      y: event.nativeEvent.clientY,
    });
  };

  const dragEnd = (event) => {
    const initialOffsetXDraggedNote = event.target.getBoundingClientRect().x;
    const initialOffsetYDraggedNote = event.target.getBoundingClientRect().y;
    const finishMouseXDraggedNote = event.nativeEvent.clientX;
    const finishMouseYDraggedNote = event.nativeEvent.clientY;

    const finishOffsetXDraggedNote = Math.abs(
      initialOffsetXDraggedNote -
        toolbarSize.width +
        (finishMouseXDraggedNote - startCoordsDraggedNote.x)
    );
    const finishOffsetYDraggedNote =
      finishMouseYDraggedNote -
      headerSize.height -
      (startCoordsDraggedNote.y - initialOffsetYDraggedNote);

    const newNotes = notes.map((note) => {
      if (note.id === draggedNoteId) {
        return {
          ...note,
          x: finishOffsetXDraggedNote,
          y: finishOffsetYDraggedNote,
        };
      }
      return note;
    });

    setNotes(newNotes);
  };

  const drawLine = () => {
    addLine(
      currentTool,
      toolsList,
      stageRef.current.getStage(),
      Object.keys(currentLayer).length > 0 ? currentLayer : drawLayerRef.current
    );
  };

  const saveLayer = () => {
    const picture = {
      projectId: projects.currentProject.projectId,
      userId: users.currentUser.userId,
      layer:
        Object.keys(currentLayer).length > 0
          ? currentLayer.toJSON()
          : drawLayerRef.current.toJSON(),
      notes,
    };
    savePicture(picture);
  };

  const noteChange = (event) => {
    const text = event.target.value;
    setTextNote(text);
    const noteId = event.target.id;
    const updatedNotes = notes.map((note) => {
      if (note.id === noteId) {
        return { ...note, text };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  useEffect(() => {
    if (pictures.length === 0) return;
    const findingPicture = pictures.find(
      (picture) =>
        picture.userId === users.currentUser.userId &&
        picture.projectId === projects.currentProject.projectId
    );
    if (!findingPicture) return;
    const layer = Konva.Node.create(findingPicture.layer);
    setCurrentLayer(layer);
    drawLayerRef.current.destroyChildren();
    stageRef.current.add(layer);
    setNotes(findingPicture.notes);
  }, []); //eslint-disable-line

  return (
    <HeaderLayout>
      <div className="workspace">
        <Toolbar
          saveLayer={saveLayer}
          setToolbarSize={setToolbarSize}
          switchBrushTool={switchBrushTool}
          switchAddNoteTool={switchAddNoteTool}
          switchCursorTool={switchCursorTool}
          currentTool={currentTool}
          toolsList={toolsList}
        />
        <Graphics
          notes={notes}
          addNote={addNote}
          dragEnd={dragEnd}
          drawLine={drawLine}
          stageRef={stageRef}
          dragStart={dragStart}
          noteChange={noteChange}
          sizeCanvas={sizeCanvas}
          placeholders={placeholders}
          drawLayerRef={drawLayerRef}
          gridLayerRef={gridLayerRef}
        />
      </div>
    </HeaderLayout>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  projects: state.projects,
  pictures: state.pictures,
  headerSize: state.headerSize,
  toolbarSize: state.toolbarSize,
});

export default connect(mapStateToProps)(Workspace);
