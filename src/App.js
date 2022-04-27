import logo from './logo.svg';
import './App.css';

function App() {
  //  const x =10; //global scope
  //  {
  //    const x =20; //local scope
  //  }
  //  console.log(x);

  //  let y = 5;
  //  y=y+2;
  //  console.log(y);

  //  const z = 5;
  //  z=z+2;
  //  console.log(z); //error
  
  // const a;
  // a=50; //error

  // let b;
  // b=50;
  // console.log(b);
   

  // arr function method

  // let arr = [10,20,30,40,50];
  // arr.map((a,i) => console.log(a));
  
  // let intro = () => {
  //   console.log("paneliya krinali");
  // }
  // intro();


// 1 is Array()
  // let arr = [1, 2, 3, 4, 5];
  // arr.map((number,i)=>console.log(number));


  // const numbers = [1, 2, 3, 4, 5];
  // const doubled = numbers.map((number) => number * 2);
  // console.log(doubled);

//2.concat()
//   const array1 = ['a', 'b', 'c'];
//   const array2 = ['d', 'e', 'f'];
//   const array3 = array1.concat(array2);

// console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]


//3.to string()
// const number = 1212
// const numberString = number.toString();
// console.log(number);



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
          Learn React 123
        </a>
      </header>
    </div>
  );
}

export default App;
