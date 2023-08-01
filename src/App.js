import "./App.css";
import { RouterProvider } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import ArticleList from "./components/ArticleList";
import NoticeComponent from "./components/NoticeComponent";
import TestBoardList from "./components/TestBoardList";
import TestTableList from "./components/TestTableList";
import TestTableList2 from "./components/TestTableList2";
import HookTest from "./components/HookTest";
import UseTransitionTest from "./components/UseTransitionTest";
import UseDeferredValueTest from "./components/UseDeferredValueTest";

function App() {
  // return 위로는 자바스크립트코드 연산
  // return 밑으로는 html css

  const num = 0;
  // num === falsy
  if (!!num) {
    console.log("출력");
  }

  return (
    // <RouterProvider router={router}/>
    <>
      {/*<div>반갑구</div>*/}
      {/*<AuthForm />*/}
      {/*<ArticleList />*/}
      {/*<NoticeComponent />*/}
      {/*<TestBoardList />*/}
      {/*<TestTableList />*/}
      {/*<TestTableList2 />*/}
      {/*<HookTest />*/}
      {/*<UseTransitionTest />*/}
      <UseDeferredValueTest />
    </>
  );
}

export default App;
