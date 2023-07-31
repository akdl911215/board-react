export default function TestBoardList() {
  const arr = [
    {
      id: 1,
      title: "1st",
    },
    {
      id: 2,
      title: "2st",
    },
  ];
  return (
    <>
      <div>
        <ul>
          {arr.map((board) => (
            <li key={board.id}>{board.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
