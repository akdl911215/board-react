import "./App.css";
import { RouterProvider } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import ArticleList from "./components/ArticleList";
import NoticeComponent from "./components/NoticeComponent";
import TestBoardList from "./components/TestBoardList";
import TestTableList from "./components/TestTableList";
import TestTableList2 from "./components/TestTableList2";

function App() {
  return (
    // <RouterProvider router={router}/>
    <>
      {/*<div>반갑구</div>*/}
      {/*<AuthForm />*/}
      {/*<ArticleList />*/}
      {/*<NoticeComponent />*/}
      {/*<TestBoardList />*/}
      {/*<TestTableList />*/}
      <TestTableList2 />
    </>
  );
}

export default App;
