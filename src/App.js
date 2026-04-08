import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main.js";
import Rebecca from './pages/Rebecca.js';
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <title>Cameron Dickie's Site</title>
      </Helmet>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/rebecca" component={Rebecca} />
      </Switch>
    </div>
  );
}

export default App;
