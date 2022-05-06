import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        this.state={
            City:'surat'
        };
    }
    ChangeCity=()=>{
        this.setState({
            City:'baroda'
        });
    }
    render() {
        return (
            
               <>
            <div>City:{this.state.City}</div>
         
            <button onClick={() => this.ChangeCity()}> change</button>
            </> 
           
        );
    }
}

export default City;