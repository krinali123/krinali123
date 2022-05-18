import { Route, Switch } from "react-router-dom";
import Deparment from "./component/Deparment/Deparment";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header";
import Home from "./Container/Home";


function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path={"/"}component={Home}/>
      <Route exact path={"/deparmaent"}component={Deparment}/>

    </Switch>
    <Footer/>
    
    </>
  );
}

export default App;
