const { createStore } = require("redux");

const BUY_CAKE='BUY_CAKE';
const BUY_ICECREAM='BUY_ICECREAM';

//action creator
function buyCake(){
    return  {
        type:BUY_CAKE,
        info:'first redux action'
    }
};

function buyIceCream(){
    return  {
        type:BUY_ICECREAM
    }
};

const initialState={
    noOfCakes:10,
    noOfIceCreams:30
};

//reducer
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            noOfCakes:state.noOfCakes-1
        }
        case BUY_ICECREAM:{
            return {
              ...state,
              noOfIceCreams:state.noOfIceCreams-1  
            }
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
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
