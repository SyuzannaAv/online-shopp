import {connect} from 'react-redux'


function Counter (props) {


    return (
        <>
        <button onClick={props.chnageCounter}>CLick</button>
        <input type="text"  onChange={props.changeValues}/>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        chnageCounter:() => {
            dispatch({
                type:'COUNT_CHANGE'
            })
        },
        changeValues:(evt) => {
            dispatch({
                type:'INPUT_VALUE',
                value:evt.target.value
            })
        }
    }
}


export default connect(null,mapDispatchToProps)(Counter) ;