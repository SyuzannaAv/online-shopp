import {connect} from 'react-redux'


function Show (props) {


    return (
        <>
        <h1>{props.newCounter}</h1>
        <h1>{props.newInput}</h1>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        newCounter:state.counter,
        newInput:state.input
    }
}

export default connect(mapStateToProps,null)(Show) ;