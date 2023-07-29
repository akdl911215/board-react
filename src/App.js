import "./App.css";
import { RouterProvider } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    // <RouterProvider router={router}/>
    <>
      {/*<div>반갑구</div>*/}
      {/*<AuthForm />*/}
      <ArticleList />
    </>
  );
}

export default App;
