
import './App.css';
import Country from './Container/Country/Country';
import City from './Container/Country/City';
import Countryfun from './Container/Country/Countryfun';
import Cityfun from './Container/Country/Cityfun';
import Time from './Container/Country/time/Time';
import Timefun from './Container/Country/time/Timefun';
import { useEffect, useState } from 'react';
import Loading from './Componets/Loading/Loading';
import Home from './Container/Country/Home/Home';

const HomewithLoading = Loading(Home)

function App() { 
const [loading,setLoading]=useState(false);
const [data,setData]=useState([]);

let orgData =[
  {id:100,name:"krinu"},
  {id:101,name:"jigu"},
  {id:101,name:"binu"},

]
useEffect(
  ()=>{
   setLoading(true);
   setTimeout(()=>{setLoading(false);setData(orgData)},2000);
  },
  [])
console.log(loading,data);


return (
 <>
 <HomewithLoading
 isloading={loading}
 data={data}
 />
 </>

 
);
}
export default App;



