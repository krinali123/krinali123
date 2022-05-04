import logo from './logo.svg';
import './App.css';

function App() { 
let data  =
[
  {
    name: "amit",
    age: 35,
    salary: 40000,
    bonus: 1000,
    status: true
  },
  {
    name: "ajay",
    age: 25,
    salary: 38000,
    bonus: 2000,
    status: false
  },
  {
    name: "mayur",
    age: 23,
    salary: 50000,
    bonus: 500,
    status: true
  },
  {
    name: "jay",
    age: 29,
    salary: 35000,
    bonus: 600,
    status: true
  },
  {
    name: "raj",
    age: 33,
    salary: 22000,
    bonus: 2000,
    status: true
  },
]
let abc =data 
 .filter((data,index) => data.salary>=35000)
 
 .reduce((acc,data,index) => acc+data.bonus,0);
 
 console.log(abc);

 let acs =data 
  .filter((data,index) => data.salary+data.bonus)
  .reduce((acc,data,index) => acc+data.salary+data.bonus,0);

console.log(acs);

return (
      <>
     <table border="2">
          <th>
            <td>name</td>
         </th>
         <th >
            <td>age</td>
         </th>
         <th>
            <td>salary</td>
         </th>
         <th>
             <td> bonus</td>
         </th>
       
       <th>
         <td>salary+ bonus</td>
       </th>
       <th>
             <td> total</td>
         </th>
       
       {
         data.map((value,index) => {
           return(
             <tr>
               <td>{value.name}</td>
               <td>{value.age}</td>
               <td>{value.salary}</td>
               <td>{value.bonus}</td>
               <td>{value.salary+value.bonus}</td>
              
               {/* <td>{meta}</td> */}
               {index === 0? <td rowspan={data.length}>{acs}</td>:null} 
               
             </tr>
           )
         })
       }
     </table>
  </>
);
}
export default App;



