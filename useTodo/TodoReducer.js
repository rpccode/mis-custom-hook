import { fechFormater } from "./fechFormater"


export const TodoReducer = (initialState= [], action) => {

    switch (action.type) {
        case 'Add todo':
                
           return [...initialState, action.payload]
        
        case 'remove todo':
            return initialState.filter(todo => todo.id !== action.payload)

        case 'complet todo':
            return initialState.map( todo => {
                
                if( todo.id === action.payload){
                    return {
                        ...todo,
                        done :!todo.done,
                        fechaf: fechFormater(Date.now()),
                    }
                }
                
                
                
                return todo;

            } )
    
        default:
           return initialState;
    }
 
}
