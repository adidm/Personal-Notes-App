import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      titleMax: 50
    }

    this.onNoteBodyChangeHandler = this.onNoteBodyChangeHandler.bind(this);
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }


  onNoteBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.titleMax),
      }
    });
  }
  onSubmitHandler(event) {
    event.preventDefault();
    this.props.onAddNotesHandler(this.state);

    this.setState(() => {
      return {
        title: '',
        body: ''
      }
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitHandler}>
          <p className="note-input__title__char-limit">{`Sisa Karakter : ${this.state.titleMax - this.state.title.length}`}</p>
          <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeHandler} required />
          <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onNoteBodyChangeHandler} required></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;