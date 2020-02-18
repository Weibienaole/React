import React from "react";
import { NavLink, Route, Redirect, Switch, Prompt } from "react-router-dom";
import One1 from "./1-1";
import One2 from "./1-2";
import Err from './err'
class Box extends React.Component {
  render() {
    return (
      <div>
        1.js
        {/* 跳转前的确认框 */}
        <Prompt when={true} message='are yyou sure'/>
        <NavLink to="/one/1">to 1-1</NavLink>
        <NavLink to="/one/2">to 1-2</NavLink>
        <div>
          {}
          {/* <Switch> */}
            <Route path="/one/1" component={One1} />
            <Route path="/one/2" component={One2} />
          {/* </Switch> */}
        </div>
      </div>
    );
  }
}
export default Box;
