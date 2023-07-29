export default function ArticleList() {
  const articles = [
    { id: 1, title: "1번 제목", content: "1번 내용", writer: "1번 작가" },
    { id: 2, title: "2번 제목", content: "2번 내용", writer: "2번 작가" },
    { id: 3, title: "3번 제목", content: "3번 내용", writer: "3번 작가" },
  ];

  return (
    <>
      <div>
        <main style={{ margin: "20px 2%", display: "flex" }}>
          <ul
            style={{
              display: "grid",
              // gridTemplateColumns: 'repeat(${(prop',
              justifyItems: "stretch",
              gap: "15px",
              margin: "0 auto", // 상하 좌우
            }}
          >
            {articles.map((article, index) => {
              return (
                <li
                  key={index}
                  style={{
                    height: "262px",
                    borderRadius: "10px",
                    border: "1px solid #fff",
                    display: "flex",
                    alignItems: "end",
                    transition: "0.5s",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      fontWeight: "500",
                      color: "red",
                      backgroundColor: "rgba(0, 0, 0, 20%)",
                      width: "100%",
                      padding: "12px 13px",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
                      {article.title}
                    </h3>
                    <span style={{ fontSize: "16px" }}>{article.writer}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    </>
  );
}

// https://github.com/google-scammers/crud/blob/main/src/components/ArticleList.tsx
