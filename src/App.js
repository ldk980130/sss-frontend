import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import routes from "./routes";
import Header from "./Components/Header";
import { GlobalStyles } from "./styles";

function App() {

  return (
    <>
    <GlobalStyles />
      <Router>
        <Header />
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
