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

// import "./App.css";

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

          <Route path="/register">{user ? <Home /> : <Register />}</Route>

          <Route path="/login">{user ? <Home /> : <Login />}</Route>

          <Route path="/articles/:articleID">
            <Article />
          </Route>

          <Route path="/write">{user ? <Write /> : <Register />}</Route>

          <Route path="/account">{user ? <Account /> : <Register />}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
