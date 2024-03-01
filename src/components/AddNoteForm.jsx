import React from 'react';

class AddNoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      remains: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitChangeEventHandler =
      this.onSubmitChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(e) {
    this.setState(() => {
      return {
        title: e.target.value,
      };
    });
  }

  onBodyChangeEventHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  onSubmitChangeEventHandler(e) {
    e.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form
        className="flex flex-col items-center w-full gap-4"
        onSubmit={this.onSubmitChangeEventHandler}
      >
        <p className="self-end block leading-none text-slate-500">
          Remaining character(s): {this.state.remains - this.state.title.length}
        </p>
        <input
          type="text"
          placeholder="Insert title..."
          className="w-full form-input"
          maxLength={this.state.remains}
          required
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <textarea
          type="text"
          placeholder="Insert your note here..."
          className="w-full form-input min-h-[120px]"
          required
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <button
          type="submit"
          className="w-full h-10 font-semibold rounded-md text-slate-700 bg-slate-300 hover:bg-slate-700 hover:text-slate-300"
        >
          Add Note
        </button>
      </form>
    );
  }
}

export default AddNoteForm;
