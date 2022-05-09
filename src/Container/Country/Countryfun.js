import React, { useState } from 'react';
import Cityfun from './Cityfun';

function Countryfun(props) {
    const [Country,setCountry]=useState('india')
    const [gdp,setgdp]=useState('0')

        const ChangeCountry=()=>{
        setCountry('mumbai')
        
    }
    return (
        <>
        <div>
            <p>Country:{Country}</p>
            <button onClick={() => ChangeCountry()}>change </button>
            <p>gdp:{gdp}</p>
            <button onClick={() => setgdp(5.5)}>change gdp</button>
        </div>
        <Cityfun abc={Country}/>
        </>
    

    );
}

export default Countryfun;