const { createStore } = require("redux");

const BUY_CAKE='BUY_CAKE';

//action creator
function buyCake(){
    return  {
        type:BUY_CAKE,
        info:'first redux action'
    }
};

const initialState={
    noOfCakes:10
};

//reducer
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            noOfCakes:state.noOfCakes-1
        }
        default: return state;
    }
};

const store=createStore(reducer);
console.log('initial state',store.getState());
const unsubscribe=store.subscribe(()=>console.log('Updated State ',store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
