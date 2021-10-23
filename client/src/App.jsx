//components
import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Write from "./pages/Write";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Register from "./pages/Register";

//context
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <div className="App box-border">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/register">
            {user ? <Home /> : <Register />}
          </Route>

          <Route exact path="/login">
            {user ? <Home /> : <Login />}
          </Route>

          <Route exact path="/articles/:article._id">
            <Article />
          </Route>

          <Route exact path="/write">
            {user ? <Write /> : <Register />}
          </Route>

          <Route exact path="/account">
            {user ? <Account /> : <Register />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
