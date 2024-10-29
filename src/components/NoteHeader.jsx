import React from "react";

class NoteHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            keyword : ''
        }
        this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    }
    onInputChangeHandler(e) {
        this.setState({
            keyword: e.target.value
        });
        this.props.onSearch(this.state);
  }
    render() {
        return (
            <div className="note-app__header">
                <h1>Notes</h1>
                <div className="note-app__search">
                    <input type="text" placeholder="cari catatan ..." value={this.state.keyword} onChange={this.onInputChangeHandler}/>
                </div>
            </div>
        );
    }
}

export default NoteHeader;