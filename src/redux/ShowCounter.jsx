import {connect} from 'react-redux'


function Show (props) {


    return (
        <>
        <h1>{props.newCounter}</h1>
        <h1>{props.newInput}</h1>
        <p>{props.newData}</p>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        newCounter:state.counter,
        newInput:state.input,
        newData:state.data
    }
}

export default connect(mapStateToProps,null)(Show) ;