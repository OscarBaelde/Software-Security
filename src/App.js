import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./Auth/Profile";
import Home from "./Home";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import Appartements from "./Appartements";
import Tenants from "./Tenants";
import Rents from "./Rents";
import Footer from "./common/Footer";
import Klachten from "./Klachten";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/appartements" component={Appartements} />
          <Route path="/tenants" component={Tenants} />
          <Route path="/rents" component={Rents} />
          <Route path="/mydata" component={Footer} />
          <Route path="/privacy" component={Footer} />
          <Route path="/klachten" component={Klachten} />
          {/*<Route path="/management" component={} />*/}
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
