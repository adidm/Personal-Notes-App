import React from "react";

function NoteArchiveButton({id, onArchiveHandler}){
    return(
        <button className="note-item__archive-button" onClick={()=>onArchiveHandler(id)}>Arsipkan</button>
    );
}

export default NoteArchiveButton;