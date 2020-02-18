import React from "react";
import { connect } from "react-redux";
import { UPDATE } from "../actions";

function ListBox({ ListReducer, onClick }) {
  return (
    <ul>
      {ListReducer.map(list => {
        return (
          <li
            style={{
              textDecoration: list.compeleted ? "line-through" : "none"
            }}
            key={list.id}
            onClick={() => onClick(list.id)}
          >
            {list.text}
          </li>
        );
      })}
    </ul>
  );
}

const getUpdateList = (list, detail) => {
  switch (detail) {
    case "UNDONE":
      return list.filter(x => !x.compeleted);
    case "DONE":
      return list.filter(x => x.compeleted);
    default:
      return list;
  }
};

const mapStateToProps = state => {
  return { ListReducer: getUpdateList(state.ListReducer, state.doneBoolean) };
};
const mapDispatchToProps = dispatch => {
  return {
    onClick: id => {
      dispatch(UPDATE(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListBox);
