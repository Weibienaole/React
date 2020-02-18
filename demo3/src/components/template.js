import React from 'react'
import { MainMenu } from "./menus/menus";
import { NavLink } from "react-router-dom";

const selectedStyle = {
  backgroundColor: 'white',
  color: 'slategray'
}
export const Template = (props) => (
  <div className = 'page'>
    <nav className='main-menu'>
    <NavLink to='/'>首页</NavLink>
    <NavLink to='/about' activeStyle = {selectedStyle}>关于我们</NavLink>
    <NavLink to='/events' activeStyle = {selectedStyle}>企业事件</NavLink>
    <NavLink to='/products' activeStyle = {selectedStyle}>公司产品</NavLink>
    <NavLink to='/contact' activeStyle = {selectedStyle}>联系我们</NavLink>
  </nav>
    {props.children}
  </div>
)