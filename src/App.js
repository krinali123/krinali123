
import './App.css';
import { useEffect, useState } from 'react';
import Loading from './Componets/Loading/Loading';
import Home from './Container/Country/Home/Home';
import Count from './Componets/Loading/Count/Count';
import Countfun from './Container/Country/Home/Countfun';

// const HomewithLoading = Loading(Home)
const Countwithcountfun =Countfun(Count)
// function App() { 
// const [loading,setLoading]=useState(false);
// const [data,setData]=useState([]);

// let orgData =[
//   {id:100,name:"krinu"},
//   {id:101,name:"jigu"},
//   {id:101,name:"binu"},

// ]
// useEffect(
//   ()=>{
//    setLoading(true);
//    setTimeout(()=>{setLoading(false);setData(orgData)},2000);
//   },
//   [])
// console.log(loading,data);


return (
 <>
 <Countwithcountfun
 iscount={Countfun}
 data={data}
 />


<div className="App">
<Count />
<Countfun />
</div>

</>
);
// }
export default App;



