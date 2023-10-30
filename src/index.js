import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';



// const defaultValues = {
//     counter:0,
//     input:''
// }

// const reducer = (state=defaultValues,action) => {

  

//         if(action.type === 'COUNT_CHANGE') {
//             return {
//               ...state,
//               counter: state.counter + 1
//             }
//         }
//         else if(action.type === 'INPUT_VALUE') {
//               return {
//                 ...state,
//                 input:action.value
//               }
//         }

//         return state;
// }

// const store  = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>

);


reportWebVitals();
