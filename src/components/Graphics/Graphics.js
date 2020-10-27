import React from "react";
import { Stage, Layer } from "react-konva";
import Note from "../Note";
import BusinessModelCanvas from "../BusinessModelCanvas";

const Graphics = ({
  notes,
  addNote,
  dragEnd,
  drawLine,
  stageRef,
  dragStart,
  noteChange,
  sizeCanvas,
  placeholders,
  drawLayerRef,
  gridLayerRef,
}) => {
  return (
    <div className="graphics">
      <div>
        <Stage
          ref={stageRef}
          onClick={addNote}
          onTouchEnd={addNote}
          onMouseDown={drawLine}
          onTouchStart={drawLine}
          width={sizeCanvas.width}
          height={sizeCanvas.height}
        >
          <Layer ref={gridLayerRef}>
            <BusinessModelCanvas
              sizeCanvas={sizeCanvas}
              placeholders={placeholders}
            />
          </Layer>
          <Layer ref={drawLayerRef} />
        </Stage>
      </div>
      <div>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            dragEnd={dragEnd}
            dragStart={dragStart}
            noteChange={noteChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Graphics;
