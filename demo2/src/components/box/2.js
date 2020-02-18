import React from "react";
import { Link, Route } from "react-router-dom";
import Two1 from "./2-1";
import Two2 from "./2-2";
import Two3 from "./2-3";
function Box() {
  return (
    <div>
      2.js
      <Link to='/two/1'>to 2-1</Link>
      <Link to='/two/2'>to 2-2</Link>
      <Link to='/two/3'>to 2-3</Link>
      <div>
        <Route path="/two/1" component={Two1} />
        <Route path="/two/2" component={Two2} />
        <Route path="/two/3" component={Two3} />
      </div>
    </div>
  );
}
export default Box;
