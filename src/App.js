import logo from './logo.svg';
import './App.css';

function App() { 

  //Medicine Data://
  //map//
  // const array = [{id:101, name:'abacavir',quantity:25, price:150, expiry:2022,  status: true},
  // {id:102, name:'Eltrombopag',quantity:90, price:180, expiry:2021,  status: true},
  // {id:103, name:'Meloxicam',quantity:85, price:450, expiry:2025,  status: false},
  //  {id:104, name:'Allopurinol',quantity:50, price:600, expiry:2023,  status: true}];

  
  // const map = array.map(x => console.log(x.id, x.name, x.quantity, x.price, x.expiry ,x.status));
  
  // console.log(array);

   //filter//
//    const words = [2021,2022,2024,2025];

// const result = words.filter(word => word >2022);

// console.log(result);
  //reduse//
  // const array1 = [150,550,450,600];


  //     const ini = 0;
  //     const sum = array1.reduce(
  //       (pre, cur) => pre + cur, ini
  //     );

  //     console.log(sum);

     // Employee Data://
   //map//
   const array = [{ name: "amit",age: 35,salary: 40000, bonus: 1000,status: true},
   {name: "ajay",age: 35,salary: 38000, bonus: 2000,status:false},
   { name: "mayur",age: 23,salary: 50000,bonus: 500,status: true},
    { name: "jay",age: 29,salary: 35000,bonus: 600,status: true}];
 
   
   const map = array.map(x => console.log( x.name, x.age, x.salary, x.bonus ,x.status));
   
   console.log(array);


   //filter//
   const words = [35,25,23,29,33];

    const result = words.filter(word => word <26);``

   console.log(result);
    //reduse//
  const array1 = [ 40000,38000,50000,35000,22000];


  const ini = 0;
  const sum = array1.reduce(
    (pre, cur) => pre + cur, ini
  );

  console.log(sum);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         krinali
        </a>
      </header>
    </div>
  );
}

export default App;
