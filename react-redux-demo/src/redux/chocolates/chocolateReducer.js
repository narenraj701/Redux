import { BUY_CHOCOLATE } from "./chocolateTypes";

const initialState={
    noOfChocolates:100
}

const chocolateReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CHOCOLATE:return{
            noOfChocolates:state.noOfChocolates-1
        }
        default : return state
    }
}

export default chocolateReducer;