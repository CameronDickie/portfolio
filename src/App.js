import logo from './logo.svg';
import './App.css';
import Main from "./pages/Main.js";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <title>Cameron Dickie's Portfolio</title>
      </Helmet>
      <Main />
    </div>
  );
}

export default App;
