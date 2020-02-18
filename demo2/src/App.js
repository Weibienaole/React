import React from "react";
import AddTodo from "./components/input";
import ListBox from "./components/list";
import BtnsBox from "./components/btns";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import Box from './components/box/list'
import BtnBoxList from './components/BtnBoxList'

const App = () => (
  <div>
    <AddTodo />
    <ListBox />
    <BtnsBox />
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Box}></Route>
      </Switch>
    </BrowserRouter>
    {/* context */}
    <BtnBoxList/> 
  </div>
);

export default App;
