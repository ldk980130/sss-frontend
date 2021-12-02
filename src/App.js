import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Detail from "./Screens/Detail";
import Create from "./Screens/Create";
import Mypage from "./Screens/Mypage";
import routes from "./routes";
import Header from "./Components/Header";
import { GlobalStyles } from "./styles";
import { useState } from "react";

import data0 from "./data/data0";
import data1 from "./data/data1";
import data2 from "./data/data2";
import data3 from "./data/data3";
import data4 from "./data/data4";
import data5 from "./data/data5";
import data6 from "./data/data6";
import data7 from "./data/data7";
import data8 from "./data/data8";
import data99 from "./data/data99";

function App() {

  //로그인상태
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //임시
  const logout = () => setIsLoggedIn(false);

  //관리자권한
  const [isMannager, setIsMannager] = useState(true);
  
  let [post0, setPost0] = useState(data0);
  let [post1, setPost1] = useState(data1);
  let [post2, setPost2] = useState(data2);
  let [post3, setPost3] = useState(data3);
  let [post4, setPost4] = useState(data4);
  let [post5, setPost5] = useState(data5);
  let [post6, setPost6] = useState(data6);
  let [post7, setPost7] = useState(data7);
  let [post8, setPost8] = useState(data8);
  let [post99, setPost99] = useState(data99);

  return (
    <>
    <GlobalStyles />
      <Router>
        <Header isLoggedIn={isLoggedIn} logout={logout} />
        <Switch>
          <Route path={routes.home} exact>
            <Home 
              isLoggedIn={isLoggedIn}
              post0={post0}
              post1={post1}
              post2={post2}
              post3={post3}
              post4={post4}
              post5={post5}
              post6={post6}
              post7={post7}
              post8={post8}  
              post99={post99}
            />
          </Route>
          <Route path={routes.logIn} exact>
            <Login />
          </Route>
          <Route path={routes.signUp} exact>
            <Signup />
          </Route>
          <Route path={routes.mypage} exact>
            <Mypage />
          </Route>
          <Route path={routes.create} exact>
            <Create />
          </Route>
          <Route path="/detail/0/:id" exact>
            <Detail post={post0}/>
          </Route>
          <Route path="/detail/1/:id" exact>
            <Detail post={post1}/>
          </Route>
          <Route path="/detail/2/:id" exact>
            <Detail post={post2}/>
          </Route>
          <Route path="/detail/3/:id" exact>
            <Detail post={post3}/>
          </Route>
          <Route path="/detail/4/:id" exact>
            <Detail post={post4}/>
          </Route>
          <Route path="/detail/5/:id" exact>
            <Detail post={post5}/>
          </Route>
          <Route path="/detail/6/:id" exact>
            <Detail post={post6}/>
          </Route>
          <Route path="/detail/7/:id" exact>
            <Detail post={post7}/>
          </Route>
          <Route path="/detail/8/:id" exact>
            <Detail post={post8}/>
          </Route>
          <Route path="/detail/99/:id" exact>
            <Detail post={post99}/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
