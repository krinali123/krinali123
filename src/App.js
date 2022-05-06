
import './App.css';
import Country from './Container/Country/Country';
import City from './Container/Country/City';
import Countryfun from './Container/Country/Countryfun';
import Cityfun from './Container/Country/Cityfun';

function App() { 

return (
      <>
      <Country gdpval={5.5}/>
      <City/>
      <Countryfun/>
      <Cityfun gdpval={4.5} />
    </>
);
}
export default App;



