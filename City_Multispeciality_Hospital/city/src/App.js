import { Route, Switch } from "react-router-dom";
import About from "./component/About/About";
import Contact from "./component/Contact";
import Deparment from "./component/Deparment/Deparment";
import Doctors from "./component/Doctors/Doctors";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header";
import Auth from "./Container/Auth/Auth";
import Home from "./Container/Home";


function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path={"/"}component={Home}/>
      <Route exact path={"/deparmaent"}component={Deparment}/>
      <Route exact path={"/doctors"}component={Doctors}/>
      <Route exact path={"/about"}component={About}/>
      <Route exact path={"/contact"}component={Contact}/>
      <Route exact path={"/danger"}component={Auth}/>

    </Switch>
    <Footer/>
    
    </>
  );
}

export default App;
