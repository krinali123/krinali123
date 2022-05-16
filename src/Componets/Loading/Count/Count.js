import React from 'react';

function Count(Componet) {
    return function Countwithcountfun({iscount,data}){
        console.log(iscount,data);
        if(iscount){
            return(
                <p>loading.....</p>
            )
        }
        else{
            return(
                <Componet data ={data}/>
            )
        }
    }
    
}

export default Count;