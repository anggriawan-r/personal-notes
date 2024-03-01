import AddNote from './AddNote';
import ActiveNotes from './ActiveNotes';
import ArchivedNotes from './ArchivedNotes';

function NoteApp({ notes, addNote, onDelete, onArchive }) {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-12 p-4 pt-12">
      <AddNote addNote={addNote} />
      <ActiveNotes notes={notes} onDelete={onDelete} onArchive={onArchive} />
      <ArchivedNotes notes={notes} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export default NoteApp;
