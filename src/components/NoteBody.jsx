import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteBody({onAddNotesHandler, notesData, searchContent, onDeleteNoteHandler, onArchiveHandler, onActiveHandler}) {
  const onActiveNotes = notesData.filter((note) => note.archived === false && note.title.toLowerCase().includes(searchContent.toLowerCase().trim()));
  const onArchiveNotes = notesData.filter((note) => note.archived === true && note.title.toLowerCase().includes(searchContent.toLowerCase().trim()));

  return (
    <div className="note-app__body">
      <NoteInput onAddNotesHandler={onAddNotesHandler} />
      <h2>Catatan Aktif</h2>
      <NoteList notesData={onActiveNotes} onDeleteNoteHandler={onDeleteNoteHandler} onArchiveHandler={onArchiveHandler} />
      <h2>Arsip</h2>
      <NoteList notesData={onArchiveNotes} onDeleteNoteHandler={onDeleteNoteHandler} onActiveHandler={onActiveHandler} />
    </div>
  );
}

export default NoteBody;
