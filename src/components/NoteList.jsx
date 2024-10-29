import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notesData, onDeleteNoteHandler, onArchiveHandler, onActiveHandler }) {
  if (notesData.length === 0) {
    return (
      <p className="notes-list__empty-message">Tidak ada catatan</p>
    );
  }

  return (
    <div className="notes-list">
      {
        notesData.map((noteData) => {
          return (
            <NoteItem key={noteData.id} {...noteData} onDeleteNoteHandler={onDeleteNoteHandler} onArchiveHandler={onArchiveHandler} onActiveHandler={onActiveHandler} />
          )
        })
      }
    </div>
  );
}

export default NotesList;