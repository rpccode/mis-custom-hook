import { useState } from "react";


export const useCounter = ( initialValues = 1 ) => {

        const [counter, setCounter] = useState(initialValues);

        const incrementar =(value) =>{
            setCounter(counter + value)
        }
        
        const reducir =( value) =>{
            if(counter === 0) return;
            setCounter(counter - value)
        }
        
        const reset =() =>{
            setCounter(initialValues)
        }

  return {
    counter,
    incrementar,
    reducir,
    reset
  }
    
  
}
