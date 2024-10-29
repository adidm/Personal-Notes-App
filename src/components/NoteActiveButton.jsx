import React from "react";

function NoteActiveButton({id, onActiveHandler}){
    return(
        <button className="note-item__archive-button" onClick={()=>onActiveHandler(id)}>Pindahkan</button>
    );
}

export default NoteActiveButton;