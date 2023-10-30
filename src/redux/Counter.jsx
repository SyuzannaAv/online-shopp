import { connect } from 'react-redux'


function Counter(props) {


    return (
        <>
            <button onClick={props.chnageCounter}>CLick</button>
            <input type="text" onChange={props.changeValues} />
            <button onClick={props.getName}>Get Data</button>
        </>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         chnageCounter:() => {
//             dispatch({
//                 type:'COUNT_CHANGE'
//             })
//         },
//         changeValues:(evt) => {
//             dispatch({
//                 type:'INPUT_VALUE',
//                 value:evt.target.value
//             })
//         }
//     }
// }


const mapDispatchToProps = {
    
    getName: () => {
        return dispatch => {
            fetch('https://api.agify.io/?name=meelad')
                .then(response => response.json())
                .then(data => {
                    dispatch({
                        type: 'GET_NAME',
                        name: data.name,
                        age: data.age
                    })
                })
        }
    },

    chnageCounter: () => {
       return dispatch => {
        dispatch({
            type: 'COUNT_CHANGE'
        })
       }
    },
}





export default connect(null, mapDispatchToProps)(Counter);