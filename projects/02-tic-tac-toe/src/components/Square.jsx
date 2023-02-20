export function Square({ children, index, updateBoard, isSelected }) {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
