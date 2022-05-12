import React, { useEffect, useState } from 'react';

function Timefun(props) {
  const [time,setTime]=useState(new Date());
 
const tick=()=>{
    setTime(new Date())
}
 useEffect(
     () =>{
       const timeid=setInterval(()=>tick(),1000);
       return()=>{
           clearInterval(timeid);
       }
       
     },
     [time]
 );
    return (
        <div>
            {time.toLocaleTimeString()}
        </div>
    );
}

export default Timefun;