import NoteItem from './NoteItem';

function ActiveNotes({ notes, onDelete, onArchive }) {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <h1 className="head-text">Active Notes</h1>
      {notes.filter((note) => note.archived === false).length === 0 ? (
        <div className="text-slate-500">Oops, your notes are empty :(</div>
      ) : (
        <div className="flex flex-col gap-4 md:flex-none md:grid md:grid-cols-2 md:grid-flow-row md:gap-4 lg:grid-cols-4">
          {notes.map((note) =>
            note.archived ? null : (
              <NoteItem
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                onArchive={onArchive}
                {...note}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default ActiveNotes;
