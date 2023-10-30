import React from "react";


class Child1 extends React.Component {

    state = {
        counter:0
    }
    
    

    handleClick = () => {
        this.setState({
            counter:this.state.counter + 1
        },()=> {
            this.props.sendFunction(this.state.counter)
        })
 
        
        
        
    }
    
    
    render () {
        return (
            <>
            <button onClick={this.handleClick}>Click</button>
            </>
        )
    }


}

export default Child1;













