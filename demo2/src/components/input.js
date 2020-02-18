import React from "react";
import { connect } from "react-redux";
import { ADD } from '../actions'
function Box({onClick}) {
  let inputDot;

  return (
    <div>
      <input
        ref={node => {
          inputDot = node;
        }}
      ></input>
      <button onClick={(e) =>{
        e.preventDefault()
        const value = inputDot.value
        if(!value.trim()) return
        onClick(value)
        inputDot.value = ''
      }}>add this</button>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  // console.log(state, ownProps)
  return state
}
const mapDispatchToProps = (dispatch, ownProps) =>{
  return{
    onClick : value =>{
      dispatch(ADD(value))
      // console.log(value)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Box);
