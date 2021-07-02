import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";

import Header from "./components/Header";
import DetailProduct from "./pages/DetailProduct";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  // code inside div
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/signin" component={SignIn} />
        <PrivateRoute exact path="/product/:id" component={DetailProduct} />
      </Switch>
    </Router>
  );
}

export default App;
