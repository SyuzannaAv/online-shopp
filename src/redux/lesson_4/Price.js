import React from "react";



class Price extends React.Component {

    constructor (props) {
        super()
        this.state = {
            price:props.price,
            rate:385
        }
    }


    handleClick = () => {
        let sign  = this.state.price[this.state.price.length -1]
        let usd = parseFloat(this.state.price) * this.state.rate + ' ֏'
        if(sign === '$') {
            this.setState({
                price:usd
            })
        }
        else {
            let amd = parseFloat(this.state.price) / this.state.rate + '$'
            this.setState({
                price:amd
            })
        }
    }



    render() {
        return (
            <>
            <div>
                <h3>{this.state.price}</h3>
                <button onClick={this.handleClick}>Change currency</button>
            </div>
            </>
        )
    }
}

export default Price;