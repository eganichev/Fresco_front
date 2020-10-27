import React, { useState } from "react";

const Note = ({ note, dragStart, dragEnd, noteChange }) => {
  const [isEditableNote, setIsEditableNote] = useState(true);

  const handleBlur = () => {
    if (note.text.length > 0) setIsEditableNote(false);
  };
  const switchEditableNote = () => setIsEditableNote(true);

  return (
    <div
      draggable={!isEditableNote}
      key={note.id}
      id={note.id}
      style={{
        top: note.y,
        left: note.x,
      }}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      className="note"
      onDoubleClick={switchEditableNote}
    >
      {isEditableNote ? (
        <textarea
          id={note.id}
          autoFocus
          value={note.text}
          onBlur={handleBlur}
          onChange={noteChange}
          className="note__textarea"
        />
      ) : (
        <div className="note__text">{note.text}</div>
      )}
    </div>
  );
};

export default Note;
