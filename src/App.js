import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import routes from "./routes";
import Header from "./Components/Header";
import { GlobalStyles } from "./styles";
import { useState } from "react";

function App() {

  //로그인상태
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //임시
  const logout = () => setIsLoggedIn(false);

  return (
    <>
    <GlobalStyles />
      <Router>
        <Header isLoggedIn={isLoggedIn} logout={logout} />
        <Switch>
          <Route path={routes.home} exact>
            <Home />
          </Route>
          <Route path={routes.logIn} exact>
            <Login />
          </Route>
          <Route path={routes.signUp} exact>
            <Signup />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
