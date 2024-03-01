import AddNoteForm from './AddNoteForm';

function AddNote({ addNote }) {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-4 md:max-w-[736px]">
      <h1 className="head-text">Add Note</h1>
      <AddNoteForm addNote={addNote} />
    </div>
  );
}

export default AddNote;
