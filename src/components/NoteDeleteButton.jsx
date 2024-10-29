import React from "react";

function NoteDeleteButton({id, onDeleteNoteHandler}){
    return(
        <button className="note-item__delete-button" onClick={()=>onDeleteNoteHandler(id)}>Hapus</button>
    );
}

export default NoteDeleteButton;