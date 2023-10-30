import React from "react";


class Child extends React.Component {

    state = {
        inputValue:'',
        show:false
    }



    handleChange = (evt) => {
        this.setState({
            inputValue:evt.target.value,
            
        })
        
    }



    handleClick = () => {
        if(this.state.inputValue === '') {
            alert('duq vochinch cheq mutqagrel')
        }
        else {
            this.setState({
                show:!this.state.show
             })
        }
    }


    render () {
        return (
            <>
            <div>
                <h2>{this.state.show ? this.state.inputValue : null}</h2>
                <input type="text"  onChange={this.handleChange} />

                <button onClick={this.handleClick}>{this.state.show ? 'Hide' : 'Show'}</button>
            </div>
            </>
        )
    }
}

export default Child;