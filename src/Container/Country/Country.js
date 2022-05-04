import React, { Component } from 'react';

class Country extends Component {
constructor(props) {
    super(props);
    this.state={
        Country:'surat'
    };
}

Changecountry=()=>{
    this.setState({
     Country:'delhi'
    });
}


    render() {
        return (
            <>
            <div>Country:{this.state.Country}</div>
            <button onClick={() => this.Changecountry()}> change</button>
            </> 
            
        );
    }
}

export default Country;