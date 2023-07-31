export default function TestTableList2() {
  const boards = [
    {
      id: 1,
      title: "첫번째 게시글입니다.",
      date: "2020-10-25",
      viewCount: 6,
    },
    {
      id: 2,
      title: "두번째 게시글입니다.",
      date: "2020-10-25",
      viewCount: 6,
    },
    {
      id: 3,
      title: "세번째 게시글입니다.",
      date: "2020-10-25",
      viewCount: 6,
    },
    {
      id: 4,
      title: "네번째 게시글입니다.",
      date: "2020-10-25",
      viewCount: 6,
    },
    {
      id: 5,
      title: "다섯번째 게시글입니다.",
      date: "2020-10-25",
      viewCount: 6,
    },
  ];
  return (
    <>
      <table
        style={{
          width: "80%",
          margin: "0 auto",
          textAlign: "center",
          borderSpacing: 0,
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                borderBottom: "1px solid red",
                padding: "10px 5px", // 세로방향 가로방향
                fontSize: 20,
              }}
            >
              번호
            </th>
            <th
              style={{
                borderBottom: "1px solid red",
                padding: "10px 5px", // 세로방향 가로방향
                fontSize: 20,
              }}
            >
              제목
            </th>
            <th
              style={{
                borderBottom: "1px solid red",
                padding: "10px 5px", // 세로방향 가로방향
                fontSize: 20,
              }}
            >
              등록일
            </th>
            <th
              style={{
                borderBottom: "1px solid red",
                padding: "10px 5px", // 세로방향 가로방향
                fontSize: 20,
              }}
            >
              조회수
            </th>
          </tr>
        </thead>
        <tbody>
          {boards.map((board) => (
            <tr>
              <td
                style={{
                  padding: "10px 5px",
                }}
              >
                {board.id}
              </td>
              <td
                style={{
                  padding: "10px 5px",
                }}
              >
                {board.title}
              </td>
              <td
                style={{
                  padding: "10px 5px",
                }}
              >
                {board.date}
              </td>
              <td
                style={{
                  padding: "10px 5px",
                }}
              >
                {board.viewCount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
