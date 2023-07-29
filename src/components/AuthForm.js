export default function AuthForm() {
  return (
    <>
      <div
        style={{
          height: "88vh", // 1vg는 실제 높이값의 1/100
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          style={{
            border: "1px solid grey",
            width: "80%",
            height: "83%",
            borderRadius: "15px",
            marginTop: "40px",
            padding: "2% 2%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input style={{ height: "30px" }} />
            <textarea
              style={{
                margin: "20px 0",
                height: "43vh",
                resize: "none",
                outline: 0,
                paddingTop: "10px",
              }}
            />
            <input
              style={{
                border: "none !important",
                textIndent: "0px !important",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button>Submit button</button>
          </div>
        </form>
      </div>
    </>
  );
}
