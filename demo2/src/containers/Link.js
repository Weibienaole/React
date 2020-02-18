import React from "react";
import { connect } from "react-redux";
import { setBtn } from "../actions";

function Linka({ dispatch, active, children, detail }) {
  if (active) return <span>{children}</span>;
  return (
    <a
      href="a"
      style={{ margin: "0 30px" }}
      onClick={(e) => {
        e.preventDefault();
        dispatch(setBtn(detail))
      }}
    >
      {children}
    </a>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.doneBoolean === ownProps.detail
  };
};

export default connect(mapStateToProps)(Linka);
