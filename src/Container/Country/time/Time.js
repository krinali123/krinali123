import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {//1.
        super(props);
        this.state={
            time:new Date()
        }
    }

       tick=()=>{
           this.setState({
               time:new Date()
           })
       }
       componentDidMount=()=>{//3.
        this.timeid=setInterval(()=>this.tick(),1000);
       

    }

    componentDidUpdate=(prevProps, prevState)=>{
     if( prevState.time !== this.state.time){
         console.log("componentDidUpdate")
     }
  
    }
    componentWillUnmount=()=>{
        clearInterval(this.timeid);
    }
    
    render() {
        return (
            //2.
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        );
    }
}

export default Time;