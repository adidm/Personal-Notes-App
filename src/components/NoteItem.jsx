import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteArchiveButton from './NoteArchiveButton';
import NoteDeleteButton from './NoteDeleteButton';
import NoteActiveButton from './NoteActiveButton';
import { showFormattedDate } from '../utils/index';

function NoteItem({id, title, createdAt, body, archived, onDeleteNoteHandler, onArchiveHandler, onActiveHandler}) {
  return (
    <div className="note-item">

      <NoteItemContent title={title} date={showFormattedDate(createdAt)} body={body} />

      <div className="note-item__action">
        <NoteDeleteButton id={id} onDeleteNoteHandler={onDeleteNoteHandler} />
        {
          archived ?
            <NoteActiveButton id={id} onActiveHandler={onActiveHandler} />
            :
            <NoteArchiveButton id={id} onArchiveHandler={onArchiveHandler} />
        }
      </div>
    </div>
  );
}

export default NoteItem;