import React, { Component } from 'react';
import City from './City';

class Cityfun extends Component {

    const [City,setCity]=useState('mubai')
    const [gdp,setgdp]=useState('0')

        const ChangeCity=()=>{
        setCity('mumbai')
        }
    render() {
        return (
            <div>
                <p>City:{City}</p>
            <button onClick={() => ChangeCity()}>change </button>
            <p>gdp:{gdp}</p>
            <button onClick={() => setgdp(5.5)}>change gdp</button>
            </div>
        );
    }
}

export default Cityfun;