import React from "react";
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
// 其实参数都是props里面的，这里采用了解构赋值
const Link = ({ filter, dispatch, active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href=""
      onClick={e => {
        // 取消默认事件
        e.preventDefault();
        dispatch(setVisibilityFilter(filter))
        // onClick();
      }}
    >
      {children}
    </a>
  );
};
const mapStateToProps = (state, ownProps) =>{
  // console.log(state, ownProps)
  return {
    active: state.visibilityFilter === ownProps.filter
  }
}

const FilterLink = connect(mapStateToProps)(Link)
export default FilterLink;
