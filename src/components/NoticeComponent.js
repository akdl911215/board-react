export default function NoticeComponent() {
  const currentPosts = [
    {
      id: 0,
      type: "board",
      title: "1번 제목",
      writer: "1번 작성자",
      createDate: "2020-07-31",
      viewCount: 10,
      chumbu: "",
    },
  ];
  return (
    <>
      <div
        style={{
          // fontFamily: "Noto Sans Korean, Malgun Gothic, sans-serif",
          height: "1000px",
        }}
      >
        <div>
          <span>공지사항22</span>
        </div>
        {/*<div>*/}
        {/*  <div>*/}
        {/*    /!*<a>*!/*/}
        {/*    <button>글쓰기</button>*/}
        {/*    /!*</a>*!/*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div>
          <div style={{ padding: "0 12px" }}>
            <table>
              <colgroup>
                <col width="5%" />
                <col width="*" />
                <col width="50%" />
                <col width="*" />
                <col width="*" />
                <col width="*" />
                <col width="*" />
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>구분</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일시</th>
                    <th>조회수</th>
                    <th>첨부</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPosts.map((post) => {
                    return (
                      <>
                        <tr key={post.id}>
                          <td>{post.id}</td>
                          <td>{post.type}</td>
                          <td>{post.writer}</td>
                          <td>{post.createDate}</td>
                          <td>{post.viewCount}</td>
                          <td>{post.chumbu}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </colgroup>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
