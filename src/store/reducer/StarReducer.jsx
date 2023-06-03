
const InitialValue ={
    Star: []
}

export default function starReducer(state = InitialValue, action ){
    switch(action.type){
        case "ADDSTAR": 
        const existingStar = state.Star.find(star => star.id === action.payload.id);
        if(existingStar){
            return{
                ...state,
                Star: [...state.Star]
            }


        }else{
            return {
                ...state,
                Star: [...state.Star,action.payload]
           
            }
        }
        case "REMOVESTAR":
            const updatedStar = state.Star.filter(star => star.id !== action.payload);
            return {
              ...state,
              Star: updatedStar
            };
          

        default: 
            return state
    }
}

