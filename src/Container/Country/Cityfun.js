import React, { useState } from 'react';

function Cityfun({gdpval}) {
    const [Cityfun,setCityfun]=useState('india')
    const [gdp,setgdp]=useState(0)

        const ChangeCityfun=()=>{
        setCityfun('mumbai')
        
    }
    return (
        <div>
            <>
            <p> Cityfun:{ Cityfun}</p>
            <button onClick={() => ChangeCityfun()}>change </button>
            <p>gdp:{gdp}</p>
            <button onClick={() => setgdp(gdpval)}>change gdp</button>
            </>
        </div>
    );
}

export default Cityfun;