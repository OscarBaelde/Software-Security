import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./Auth/Profile";
import Home from "./Home";
import Navbar from "./common/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          {/*<Route path="/management" component={} />*/}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
