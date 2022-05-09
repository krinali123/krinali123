import React, { useState } from 'react';
import Course from './Course';

function Branch(props) {
    const [Branch,setBranch]=useState('RW1')
    const ChangeBranch=()=>{
        setBranch('RW2')

        
        
    }
    return (
       <>
        <div>
                <p>Branch name:{Branch}</p> 
                <button  onClick={()=> ChangeBranch()}>change</button>
       </div>
       <Course abc={Branch}/>
            </>
        
    );
}

export default Branch;