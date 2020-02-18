import React from "react";
import {
  BrowserRouter,
  NavLink,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import One from "./1";
import Two from "./2";
import Err from './err'
import Not from './notfount'

class Box extends React.Component {
  render() {
    // console.log(this.props);
    /*
      history   历史跳转  
        push   正常跳转
        go()
        goBack(n)  回退n步
      location 
        pathName   当前路径名
      match
        params  内含当前Url携带的params参数
          
    
    */

    return (
      <div>
        listBox
        <Link to="/one">to 1</Link>
        <Link to="/two">to 2</Link>
        <div>
          <Switch>
            <Route path="/one" component={One}></Route>
            <Route path="/two" component={Two}></Route>
            {/* <Redirect to='/err' component={Err}></Redirect> */}
            {/* 404页面   只需要放在最下方，让switch最后匹配到  没有path路径表示什么路径都可以进入，再由Switcch由上到下查找路径 */}
            {/* render和component相似  只不过component内含组件，而render内是一个函数(箭头) return出来一些标签 */}
            <Route render={() => <h3>Not Found</h3>}/>
          </Switch>
        </div>
      </div>
    );
  }
}
export default Box;
