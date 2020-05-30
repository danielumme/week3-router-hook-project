import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// 라우투 등록, 컴포넌트 등록, 사용자 선택한 내용 보여줌
import Header from "./components/Header";
import Recipe from "./components/Recipe";
import RecipeDetail from "./components/RecipeDetail";
import Chef from "./components/Chef";
import ChefDetail from "./components/ChefDetail";
import RecipeFind from "./components/RecipeFind";
import RecipeNews from "./components/RecipeNews";

/*

   index.js
   ReactDOM.render(<App/>, document.getElementById('root'))
   <App/> => html을 읽어서 => <div id = 'root'></div>
            ======= jsp, asp, php

 */
function App() {
  return (
    <Router>
      <Header/>
      <div className={"container-fluid"}>
      <div className={"jumbotron"}>
        <Switch>
          <Route exact path={"/"} component={Recipe}/>
          <Route path={"/recipe_detail"} component={RecipeDetail}/>
          <Route path={"/chef"} component={Chef}/>
          <Route path={"/chefdetail"} component={ChefDetail}/>
          <Route path={"/news"} component={RecipeNews}/>
          <Route path={"/find"} component={RecipeFind}/>
        </Switch>
      </div>
    </div>
    </Router>

  );
}

export default App;
