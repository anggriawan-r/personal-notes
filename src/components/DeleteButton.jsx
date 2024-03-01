function DeleteButton({ id, onDelete }) {
  return (
    <button
      className="bg-red-700 btn hover:bg-red-900"
      onClick={() => onDelete(id)}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
