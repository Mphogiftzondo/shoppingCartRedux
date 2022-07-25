import "./App.css";
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <Switch>
      <Route exact path="/"><Products/></Route>
      <Route exact path="/cart"><Cart/></Route>
    </Switch>
  );
}

export default App;
