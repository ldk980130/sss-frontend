import { useState } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
 
function App() {
const [isLoggedIn,setIsLoggedIn] = useState(false);
//Home Component와 Login Component에 있는 방식은 함수나 변수를 Component에 넘겨주는 방법
//name(아무거나)={할당할 변수 or 함수}
//여기서 만든 name을 각 Component에 작성하기
//기능은 isLoggedIn이 true(로그인함) / false(로그인 안함)을 확인

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <Home setIsLoggedIn={setIsLoggedIn}/> : <Login setIsLoggedIn={setIsLoggedIn} />}
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
 
export default App;
