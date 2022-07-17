import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import "./Router.css"


function MainRouter() {
  return (
    <div className="root-wrapper">
      <Header></Header>
      <Routes>
        <Route exact path = "/" element = {<MainPage></MainPage>}></Route>
      </Routes>
    </div>
  );
}

export default MainRouter
