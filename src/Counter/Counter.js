import { useState } from "react";
import style from "./style.module.css";

export default function Counter () {

      const [value, setValue] = useState (0);


      const handlePlus = () => {
            setValue (value + 1)

            if (value === 5) {
                  setValue (value)
            }
      }

      const handleMinus = () => {
            setValue (value - 1)

            if (value === -5) {

                  setValue (value)
            }
      }

      const handleReset = () => {
            setValue (0)
      }

 

      return (

            <div className={style.div}>
                  <h1 className={style.number}>{value}</h1>
                  <div className={style.buttons}>
                        <button onClick={handlePlus}> + </button>
                        <button onClick={handleMinus}> - </button>  
                        <button onClick={handleReset}> 0 </button>  
                  </div>
                  
            </div>
      )
}

