import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import { showFormattedDate } from '../utils/index';

function NoteItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
}) {
  return (
    <div className="flex flex-col justify-between p-4 rounded-md text-slate-200 bg-slate-800">
      <div className="flex flex-col gap-1">
        <div className="overflow-hidden text-lg font-bold text-ellipsis">{title}</div>
        <div className="text-xs text-slate-400">
          {showFormattedDate(createdAt)}
        </div>
        <div className="overflow-x-hidden text-base break-words hyphens-auto">{body}</div>
      </div>
      <div className="flex w-full gap-2 pt-4 justify-evenly">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
      </div>
    </div>
  );
}

export default NoteItem;
