const { createStore, combineReducers } = require("redux");

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

const initialCakeState={
    noOfCakes:10
};

const initialIceCreamState={
    noOfIceCreams:30
};

//reducers
const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            noOfCakes:state.noOfCakes-1
        }
        default: return state;
    }
};

const iceCreamReducer=(state=initialIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            noOfIceCreams:state.noOfIceCreams-1
        }
        default: return state;
    }
};

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
const store=createStore(rootReducer);
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
