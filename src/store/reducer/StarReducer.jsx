
const InitialValue ={
    Star: []
}

export default function starReducer(state = InitialValue, action ){
    switch(action.type){
        case "CHANGESTAR": 
            return {
                ...state,
                Star: [...state.Star,action.payload]
            }
        default: 
            return state
    }
}