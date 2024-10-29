import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import { getInitialData} from "../utils/index";

class NoteApp extends React.Component {
    constructor(props){
        super(props);
        const data = getInitialData()
        this.state = {
            notesData : data,
            keyWord : ''
        }
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNotesData = this.onAddNotesData.bind(this);
        this.onArchiveNotesData = this.onArchiveNotesData.bind(this);
        this.onActiveNotesData = this.onActiveNotesData.bind(this);
        
    }

    onSearchHandler({keyword}) {
        this.setState(() => {
            return { keyWord : keyword }
        });
    }
    onAddNotesData({title, body}) {
        this.setState((prevState) => {
            return {
                notesData : [
                    ...prevState.notesData,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    }
                ]
            }
        });
    }
    onDeleteHandler(id) {
        const filtered = this.state.notesData.filter((noteData) => noteData.id !== id);
        this.setState({notesData: filtered});
    }
    onArchiveNotesData(id) {
        this.setState({notesData: this.state.notesData.map((noteData) => noteData.id === id ? {...noteData, archived:true} : noteData)});
    }
    onActiveNotesData(id) {
        this.setState({notesData: this.state.notesData.map((noteData)=> noteData.id === id ? {...noteData, archived:false} : noteData)});
    }
    render() {
        return(
            <div>
            <NoteHeader onSearch={this.onSearchHandler}/>
            <NoteBody searchContent={this.state.keyWord} onAddNotesHandler={this.onAddNotesData} notesData={this.state.notesData}
            onDeleteNoteHandler={this.onDeleteHandler} onArchiveHandler={this.onArchiveNotesData} onActiveHandler={this.onActiveNotesData}/>
            </div>
        );
    }
}

export default NoteApp;