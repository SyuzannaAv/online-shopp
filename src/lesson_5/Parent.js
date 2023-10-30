import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

class Parent extends React.Component {


    state = {
        value:0
    }
    
    
  getValue = (val) => {
    console.log(val);
        this.setState({
            value:val
        })
  }  
    
    
    
    
    render () {
        return (
            <>
            <Child1 sendFunction = {this.getValue} />
            <Child2 sendValue = {this.state.value} />
            </>
        )
    }


}

export default Parent;