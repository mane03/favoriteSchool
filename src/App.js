import './App.scss';
import NavBar from "./Components/NavBar/NavBar";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contacts from "./Components/Contacts/Contacts";
import Classes from "./Components/Classes/Classes";
import JavaScript from "./Components/Classes/JavaScript/JavaScript";
import Blog from "./Components/Blog/Blog";

function App() {
  return (
      <>
          <Router>
              <NavBar/>
              <Switch>
                  <Route path="/" exact>
                      <Home/>
                  </Route>
                  <Route path="/aboutUs">
                      <AboutUs/>
                  </Route>
                  <Route path="/contacts">
                      <Contacts/>
                  </Route>
                  <Route path="/classes">
                      <Classes/>
                  </Route>
                  <Route path="/javaScript">
                      <JavaScript/>
                  </Route>
                  <Route path="/blog">
                      <Blog/>
                  </Route>
              </Switch>
              <Footer/>
          </Router>
      </>
  );
}

export default App;
