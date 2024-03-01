function ArchiveButton({ id, archived, onArchive }) {
  return (
    <button
      className="btn bg-amber-700 hover:bg-amber-900"
      onClick={() => onArchive(id)}
    >
      {archived ? 'Move' : 'Archive'}
    </button>
  );
}

export default ArchiveButton;
