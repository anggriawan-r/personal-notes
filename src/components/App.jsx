import React from 'react';
import Header from './Header';
import NoteApp from './NoteApp';
import { getInitialData } from '../utils/index';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchKeyword: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(itemId) {
    const notes = this.state.notes.filter((note) => note.id !== itemId);
    this.setState({ notes });
  }

  onArchiveHandler(itemId) {
    const idx = this.state.notes.findIndex(({ id }) => id === itemId);
    const note = this.state.notes[idx];
    note.archived = !note.archived;

    this.setState((prev) => {
      return {
        ...prev.notes,
        note,
      };
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prev) => {
      return {
        notes: [
          ...prev.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onSearchHandler(keyword) {
    this.setState({ searchKeyword: keyword });
  }

  render() {
    return (
      <div className="w-full h-full pb-16 bg-slate-900">
        <Header onSearch={this.onSearchHandler} />
        <NoteApp
          notes={this.state.notes.filter(({ title }) =>
            title.toLowerCase().match(this.state.searchKeyword.toLowerCase())
          )}
          addNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default App;
