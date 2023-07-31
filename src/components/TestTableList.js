export default function TestTableList() {
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
                borderBottom: "1px solid #e8e8e8",
                fontSize: "16px",
                padding: "10px 5px",
                fontWeight: "bold",
              }}
            >
              글번호
            </th>
            <th
              style={{
                borderBottom: "1px solid #e8e8e8",
                fontSize: "16px",
                padding: "10px 5px",
                fontWeight: "bold",
              }}
            >
              제목
            </th>
            <th
              style={{
                borderBottom: "1px solid #e8e8e8",
                fontSize: "16px",
                padding: "10px 5px",
                fontWeight: "bold",
              }}
            >
              등록일
            </th>
            <th
              style={{
                borderBottom: "1px solid #e8e8e8",
                fontSize: "16px",
                padding: "10px 5px",
                fontWeight: "bold",
              }}
            >
              조회수
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            style={{
              backgroundColor: "#eceaea",
              cursor: "pointer",
            }}
          >
            <td style={{ padding: "10px 5px" }}>1</td>
            <td style={{ padding: "10px 5px" }}>첫번째 게시글입니다.</td>
            <td style={{ padding: "10px 5px" }}>2020-10-25</td>
            <td style={{ padding: "10px 5px" }}>6</td>
          </tr>
          <tr>
            <td style={{ padding: "10px 5px" }}>2</td>
            <td style={{ padding: "10px 5px" }}>두번째 게시글입니다.</td>
            <td style={{ padding: "10px 5px" }}>2020-10-25</td>
            <td style={{ padding: "10px 5px" }}>5</td>
          </tr>
          <tr>
            <td style={{ padding: "10px 5px" }}>3</td>
            <td style={{ padding: "10px 5px" }}>세번째 게시글입니다.</td>
            <td style={{ padding: "10px 5px" }}>2020-10-25</td>
            <td style={{ padding: "10px 5px" }}>1</td>
          </tr>
          <tr>
            <td style={{ padding: "10px 5px" }}>4</td>
            <td style={{ padding: "10px 5px" }}>네번째 게시글입니다.</td>
            <td style={{ padding: "10px 5px" }}>2020-10-25</td>
            <td style={{ padding: "10px 5px" }}>2</td>
          </tr>
          <tr>
            <td style={{ padding: "10px 5px" }}>5</td>
            <td style={{ padding: "10px 5px" }}>다섯번째 게시글입니다.</td>
            <td style={{ padding: "10px 5px" }}>2020-10-25</td>
            <td style={{ padding: "10px 5px" }}>4</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
