import React from "react";
import Btn from "../containers/Btns";
export default class Box extends React.Component {
  render() {
    const lists = ["Arthas", "Monica", "BOSS"];
    return (
      <div>
        {lists.map((x, index) => (
          <Btn key={index}>{x}</Btn>
        ))}
      </div>
    );
  }
}
