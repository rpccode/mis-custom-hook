import { useState } from "react";


export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    // {
    //     username:'',
    //     email: '',
    //     password:''
    // }

    const onInputChange = ({target}) =>{
        const {name , value} = target
        setFormState({
            ...formState,
            [name] : value
        })

    }

    const onResectInput = () =>{
            setFormState(initialForm)
    }






  return {
    ...formState,
    formState,
    onInputChange,
    onResectInput
  }
}
