import {BrowserRouter as Router, Route, Switch, Redirect, useParams} from "react-router-dom";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Detail from "./Screens/Detail";
import routes from "./routes";
import Header from "./Components/Header";
import { GlobalStyles } from "./styles";
import { useState } from "react";
import data from "./data";

function App() {

  //로그인상태
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //임시
  const logout = () => setIsLoggedIn(false);

  //관리자권한
  const [isMannager, setIsMannager] = useState(true);
  
  let [post, setPost] = useState(data);

  return (
    <>
    <GlobalStyles />
      <Router>
        <Header isLoggedIn={isLoggedIn} logout={logout} />
        <Switch>
          <Route path={routes.home} exact>
            <Home post={post}/>
          </Route>
          <Route path={routes.logIn} exact>
            <Login />
          </Route>
          <Route path={routes.signUp} exact>
            <Signup />
          </Route>
          <Route path="/detail/:id" exact>
            <Detail post={post}/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
